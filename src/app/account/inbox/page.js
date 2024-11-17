"use client"

import { useState } from 'react';

import ReportCard from '@/components/ReportCard/ReportCard';

export default function Home() {

  const media = [
    { type: "image", url: "../../assets/foto-unsplash.jpg"},
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div className="flex h-screen bg-gray-100 w-full">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Todas as Ocorrências</h1>
        <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-3/6 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
        </div>
        <ReportCard title="Roubo a uma residência" location="Rio de Janeiro" date="22/06/2024" time="12:30" description="Roubo a uma residência ocorrido na noite do dia 22/06. Suspeitos arrombaram a porta da frente e levaram eletrônicos e joias." status="Pendente" media={media} adm={false}/>
      </main>
    </div>
  );
}