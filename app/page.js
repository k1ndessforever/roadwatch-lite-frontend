// frontend/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          RoadWatch Lite
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real-time platform tracking corruption and celebrating heroes across India
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Link href="/hero" className="group">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-green-700 mb-3">
              🦸 Hero Feed
            </h2>
            <p className="text-gray-700">
              Discover inspiring acts of courage, honesty, and social service from across the nation
            </p>
          </div>
        </Link>

        <Link href="/corruption" className="group">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-red-700 mb-3">
              🚨 Corruption Feed
            </h2>
            <p className="text-gray-700">
              Stay informed about verified corruption cases, frauds, and scams
            </p>
          </div>
        </Link>
      </div>

      <div className="text-center">
        <Link href="/submit" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit a Report
        </Link>
      </div>
    </div>
  );
}
