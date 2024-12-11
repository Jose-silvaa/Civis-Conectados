"use client"

import ReportCard from "../../../components/ReportCard/ReportCard";
import { getReports } from "../../../utils/getReports";
import { useEffect, useState } from "react";


export default function ReportReview(){

    const [reports, setReports] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    useEffect(()=>{
      async function fetchReports() {
          const reportsData = await getReports();
          setReports(reportsData);
      }

      fetchReports();
    },[])
  

    return(
        <div className="flex h-auto bg-gray-100 w-full">
            <section className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">Ocorrências Pendentes</h1>
                <div className="mb-4">
                    <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-3/6 p-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
            

                {reports.map((report)=>{
                      return(
                        <ReportCard key={report.id} id={report.id} title={report.title} city={report.city} date={report.date} time={report.time} description={report.description} status={report.status} midia={report.imageUrl} adm={true} />
                      )
                })}
             
            </section>
        </div>
    )
}