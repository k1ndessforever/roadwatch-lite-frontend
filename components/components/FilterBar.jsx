// frontend/components/FilterBar.jsx
'use client';
import { useState } from 'react';

export default function FilterBar({ feedType }) {
  const [filters, setFilters] = useState({
    state: '',
    category: ''
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex gap-4">
      <select
        value={filters.state}
        onChange={(e) => setFilters({ ...filters, state: e.target.value })}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All States</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Delhi">Delhi</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
      </select>

      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {feedType === 'hero' ? (
          <>
            <option value="rescue">Rescue</option>
            <option value="honesty">Honesty</option>
            <option value="social-service">Social Service</option>
          </>
        ) : (
          <>
            <option value="political">Political</option>
            <option value="financial">Financial</option>
            <option value="police">Police</option>
          </>
        )}
      </select>
    </div>
  );
}
