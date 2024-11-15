"use client"

import { useState } from 'react';

import Sidebar from '../../components/SideBar';

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="mb-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-3/6 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
      </main>
    </div>
  );
}