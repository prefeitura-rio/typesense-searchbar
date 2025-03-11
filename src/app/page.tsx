'use client'
import { useState } from 'react';

// Define the type for the search result items
type SearchResultItem = {
  titulo: string;
  // Add other properties if needed
};

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.length > 2) { // Start searching after 3 characters
      try {
        const response = await fetch(`/api/search?q=${e.target.value}`);
        const data = await response.json();
        setResults(data.result || []); // Ensure results is an array
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('./header.png')", height: '220px' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl font-bold mb-4">A Prefeitura do Rio mais perto de você</h1>
        <div className="max-w-md w-full">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <ul className="mt-4 bg-white text-black rounded-md">
            {results.map((item, index) => (
              <li key={index} className="p-2 border-b border-gray-200">
                {item.titulo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
