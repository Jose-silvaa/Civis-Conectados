import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/foto-unsplash.jpg"
// import Video from "../../assets/video.mp4"


export default function ReportCard({ title, location, date, time, description, status, media }) {

    const [showDetails, setShowDetails] = useState(false);


    const handleDetailsClick = () => {
      setShowDetails(!showDetails); 
    };

    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4">

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <span
            className={`px-2 py-1 text-sm rounded ${
              status === "Pendente"
                ? "bg-yellow-100 text-yellow-700"
                : status === "Confirmado"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>
        </div>
  
        <p className="text-sm text-gray-600">
          <strong>Localização:</strong> {location}
        </p>
  
        <p className="text-sm text-gray-600">
          <strong>Data:</strong> {date}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Hora:</strong> {time}
        </p>
  
  
        <p className="text-sm text-gray-700 mt-2">
          {description}
        </p>
  
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={handleDetailsClick}>
          {showDetails ? "Fechar" : "Ver Midias"}
          </button>
          <button className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition">
            Relatar como Falso
          </button>
        </div>
        {showDetails && (
        <div className="mt-4">
          {media.map((item, index) => (
            item.type === "image" ? (
              <Image
                key={index}
                src={Logo}
                alt={`Media ${index}`}
                className="bg-red"
                width="200"
                height="200"
              />
            ) : (
              <video
                key={index}
                controls
                width="200"
                height="100"
                className="w-full rounded-lg mb-2"
              >
                <source src={item.url} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            )
          ))}
        </div>
      )}
      </div>
    );
  }
  