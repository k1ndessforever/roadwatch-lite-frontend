// frontend/components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            RoadWatch Lite
          </Link>
          
          <div className="flex gap-6">
            <Link href="/hero" className="text-gray-700 hover:text-green-600 font-medium">
              Hero Feed
            </Link>
            <Link href="/corruption" className="text-gray-700 hover:text-red-600 font-medium">
              Corruption Feed
            </Link>
            <Link href="/submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Submit Report
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
