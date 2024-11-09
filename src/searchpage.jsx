import React from 'react';

function SearchPage() {
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <div className="w-screen bg-gray-800 py-6 flex justify-between items-center px-4">
      <h1 className="text-white text-3xl absolute left-1/2 transform -translate-x-1/2">Sahara Tiles</h1>
        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Search
        </button>
      </div>
    <div/>   
      <div className="mt-10 flex space-x-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-1/3 p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Size"
          className="w-1/3 p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Type"
          className="w-1/3 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
    </div>
  );
}

export default SearchPage;
