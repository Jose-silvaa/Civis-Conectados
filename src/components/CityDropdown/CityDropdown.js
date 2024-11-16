"use client"


import { useState, useEffect } from "react";

const CityDropdown = ({value, onChange}) => {
  const [cities, setCities] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchCities = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/distritos");

      if (!response.ok) {
        throw new Error("Erro ao carregar cidades.");
      }
      const data = await response.json();
        setCities(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="city-select" className="block text-sm font-medium text-gray-700">Localização</label>
        {loading ? (
            <p>Carregando cidades...</p>
        ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
        ) : (
            <select id="city-select"  className="mt-1 p-2 w-full border border-gray-300 rounded" value={value} onChange={handleChange}>
            <option>Selecione a Localização</option>
            {cities.map((city, index) => (
                <option key={index} value={city.nome}>
                {city.nome}
                </option>
            ))}
            </select>
      )}

    </div>
  );
};

export default CityDropdown;
