"use client"

import CityDropdown from "@/components/CityDropdown/CityDropdown";
import { useState } from "react";

export default function CreateReport() {

    const [error, setError] = useState('')
    const [formReport, setFormReport] = useState({
        title : '',
        date : '',
        time : '', 
        city : '',
        description : '',
        media : []
    })

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!formReport.title || !formReport.date || !formReport.time || !formReport.description) {
            setError("Por favor, preencha todos os campos");
            return;
        }

        setFormReport({
            title: "",
            date: "",
            time: "",
            city: "",
            description: "",
            media: [],
        });
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormReport((prevData) => ({
            ...prevData,
            [name] : value
        
        }))
    }

    const handleCityChange = (selectedCity) => {
        setFormReport((prevState) => ({
          ...prevState,
          city: selectedCity,
        }));
      };


    const handleMediaChange = (e) => {
        setFormReport((prevState) => ({
          ...prevState,
          media: Array.from(e.target.files), 
        }));
    };


    return (
      <div className="h-screen w-full mx-auto p-6 bg-gray-100 shadow-lg pt-10">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Criar nova ocorrência</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formReport.title}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Informe o título da Ocorrência"
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-4">
            <CityDropdown value={formReport.city} onChange={handleCityChange}/>
          </div>
  
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formReport.date}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formReport.time}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
          </div>
  
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea
              id="description"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              rows="4"
              name="description"
              value={formReport.description}
              placeholder="Descreva a ocorrência"
              onChange={handleChange}
            ></textarea>
          </div>
  
          <div className="mb-4">
            <label htmlFor="media" className="block text-sm font-medium text-gray-700">Adicionar Mídia</label>
            <input
              type="file"
              id="media"
              accept="image/*,video/*"
              multiple
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              onChange={handleMediaChange}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Criar Ocorrência</button>
            <button type="reset" className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600">Cancelar</button>
          </div>
        </form>
      </div>
    );
  }
  