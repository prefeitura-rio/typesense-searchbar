'use client'
import { useState } from 'react';

type SearchResultItem = {
  titulo: string;
};

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.length > 2) {
      try {
        const response = await fetch(`/api/search?q=${e.target.value}`);
        const data = await response.json();
        setResults(data.result || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-cover bg-center z-50" style={{ backgroundImage: "url('./header.png')", height: '220px' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">A Prefeitura do Rio mais perto de você</h1>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />

            {/* Results Box */}
            {results.length > 0 && (
              <div className="absolute w-full mt-2 bg-white text-black rounded-md shadow-lg max-h-60 overflow-y-auto">
                <ul className="divide-y divide-gray-200">
                  {results.map((item, index) => (
                    <li key={index} className="p-3 hover:bg-gray-100 cursor-pointer">
                      {item.titulo}
                    </li>
                  ))}
                </ul>

                {/* Fixed Bottom Button */}
                <button className="w-full bg-blue-600 text-white p-3 text-center font-medium hover:bg-blue-700 sticky bottom-0">
                  Busca Avançada
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
