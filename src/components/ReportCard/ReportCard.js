import { useState } from "react";
import Image from "next/image";
import StatusReport from "../StatusReport/StatusReport";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

import updateDocument from "@/utils/updateDocument";



export default function ReportCard({ id, title, city, date, time, description, status, midia, adm}) {


    const [showDetails, setShowDetails] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status)


    console.log(midia);
    const handleDetailsClick = () => {
      setShowDetails(!showDetails); 
    };

    const updateStatus = async (newStatus) => {
    setCurrentStatus("Mudando de Estado...");

    try {
        await updateDocument(db, id, newStatus);

        const statusRef = doc(db, "reports", id);
        const updatedDoc = await getDoc(statusRef);

        if (updatedDoc.exists()) {
          if (updatedDoc.data().status === newStatus) {
            setCurrentStatus(newStatus);  
          } else {
            setCurrentStatus("Erro: Status não atualizado corretamente.");
          }
        } else {
          setCurrentStatus("Erro: Documento não encontrado.");
        }
      } catch (error) {
        setCurrentStatus("Erro ao atualizar o status. Tente novamente.");
      }
    };


    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4">

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

          <div className="flex flex-col items-center">
            <StatusReport status={currentStatus}></StatusReport>
          </div>
        </div>
  
        <p className="text-sm text-gray-600">
          <strong>Cidade:</strong> {city}
        </p>
  
        <p className="text-sm text-gray-600">
          <strong>Data:</strong> {date}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Hora:</strong> {time}
        </p>
  
        <p className="text-sm text-gray-600 mt-2">
          <strong>Descrição: </strong>
          {description}
        </p>
  
        <div className="mt-10 flex justify-start gap-2">
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={handleDetailsClick}>
          {showDetails ? "Fechar" : "Ver Midias"}
          </button>

          {adm ? (
            <>
              <button className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={()=>updateStatus("Falso")}>
                Relatar como Falso
              </button>
              <button className="px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={()=>updateStatus("Verdadeiro")}>
                Relatar como Verdadeiro
              </button>
            </>
          ) : (
            <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Fazer Comentário
            </button>
          )}
        
        </div>
        {showDetails && (
          
          <div className="mt-4">
            <Image
              key={id}
              src={midia} 
              alt={`Midia ${id}`}
              className="bg-red"
              width="200"
              height="200"
              />    
          </div>
      )}
      </div>
    );
  }
  