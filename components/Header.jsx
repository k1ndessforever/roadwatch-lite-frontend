'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🎯</span>
          <div>
            <h1 className="text-2xl font-bold">RoadWatch Lite</h1>
            <p className="text-xs text-gray-300">Transparency Platform</p>
          </div>
        </Link>
        
        <nav className="flex gap-6">
          <Link href="/hero" className="hover:text-green-400 transition font-semibold">
            🦸 Heroes
          </Link>
          <Link href="/corruption" className="hover:text-red-400 transition font-semibold">
            🚨 Corruption
          </Link>
          <Link href="/submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition font-semibold">
            📝 Submit
          </Link>
        </nav>
      </div>
    </header>
  );
}
