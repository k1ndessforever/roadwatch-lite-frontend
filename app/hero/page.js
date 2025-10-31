// frontend/app/hero/page.js
'use client';
import LiveFeed from '@/components/LiveFeed';
import FilterBar from '@/components/FilterBar';

export default function HeroPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-green-700 mb-2">
          🦸 Hero Feed
        </h1>
        <p className="text-gray-600">
          Real-time updates of inspiring acts from across India
        </p>
      </div>
      
      <FilterBar feedType="hero" />
      <LiveFeed feedType="hero" />
    </div>
  );
}
