// frontend/app/corruption/page.js
'use client';
import LiveFeed from '@/components/LiveFeed.jsx';
import FilterBar from '@/components/FilterBar.jsx';

export default function CorruptionPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-red-700 mb-2">
          🚨 Corruption Feed
        </h1>
        <p className="text-gray-600">
          Verified reports of corruption and fraud cases
        </p>
      </div>
      
      <FilterBar feedType="corruption" />
      <LiveFeed feedType="corruption" />
    </div>
  );
}
