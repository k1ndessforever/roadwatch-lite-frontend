'use client';

import { useState } from 'react';

export default function FilterBar({ feedType }) {
  const [filter, setFilter] = useState('all');

  return (
    <div className="mb-6 flex gap-3 flex-wrap">
      {['all', 'recent', 'verified', 'trending'].map((option) => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            filter === option
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
