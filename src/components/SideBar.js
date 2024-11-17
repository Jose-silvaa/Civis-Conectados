"use client"


import Image from "next/image";
import newLogo from "../assets/conecta.png"
import Link from 'next/link';
import { useState } from 'react';



export default function Sidebar() {

  const [reportReview, setReportReview] = useState(false)


  const showReportReview = ()=>{
    setReportReview(!reportReview);
  }

  return (
    <div className="w-64 h-full bg-red shadow-md flex flex-col">
      <div className="flex items-center justify-center p-2 border-b">
        <Image src={newLogo} width="500"  alt="logo"/>
      </div>

      <nav className="flex-1 p-4 space-y-4">
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

    </div>
  );
}