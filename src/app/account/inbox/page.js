"use client"

import { useEffect, useState } from 'react';
import ReportCard from '@/components/ReportCard/ReportCard';
import { getReports } from '@/utils/getReports';


export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [approveReports, setApproveReports] =  useState([]);
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  useEffect(()=>{
    async function fetchReports(){
      const reportsData = await getReports();
      setApproveReports(reportsData);
    }

    fetchReports();
  }, [])

  return (
    <div className="flex h-auto bg-gray-100 w-full">
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

        {approveReports.map((approve) =>{
          if(approve.status == "Verdadeiro"){
            return (
              <ReportCard key={approve.id} id={approve.id} title={approve.title} city={approve.city} date={approve.date} time={approve.time} description={approve.description} status={approve.status} midia={approve.imageUrl} adm={false} />
            )
          }
        })}
      </main>
    </div>
  );
}