"use client"


import Image from "next/image";
import newLogo from "../assets/conecta.png"
import Link from 'next/link';
import { useState } from 'react';
import { auth } from "@/firebase/config";
import { logoutUser } from "@/firebase/logout/firebaseLogout";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/authContext";



export default function Sidebar() {

  const router = useRouter();
  const [reportReview, setReportReview] = useState(false)
  const userStatus = useAuth();

  const handleSession = async() =>{
    
    try {
        const user = await logoutUser(auth);
        router.push("/")

    } catch (error) {
      
    }
  }

  const showReportReview = ()=>{
    setReportReview(!reportReview);
  }

  return (
    <div className="w-64 h-full bg-red shadow-md flex flex-col">
      <div className="flex items-center justify-center p-2 border-b">
        <Image src={newLogo} width="500"  alt="logo"/>
      </div>

      <nav className="flex-1 p-4 space-y-4">

       {userStatus ? (
         <h1 className="p-2 text-lg font-bold text-gray-700">{userStatus.email}</h1>
        ) : (
          <p className="p-2 text-lg font-bold text-gray-700">Nenhum usuário conectado.</p>
        )}
        <Link href="/account/inbox" onClick={showReportReview} className="block p-2 rounded hover:bg-gray-200">
          Todas as Ocorrências 
        </Link>

        {reportReview && (
          <Link href="/account/report-review" className="block p-2 rounded hover:bg-gray-200 ml-4">
           Ocorrências Pendentes
          </Link>
        )}
  
        <Link href="/account/report" className="block p-2 rounded hover:bg-gray-200">
          Registrar Ocorrência
        </Link>
      </nav>

      <div className="p-4">
          <button className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={handleSession}>
              Sair
          </button>
      </div>

    </div>
  );
}