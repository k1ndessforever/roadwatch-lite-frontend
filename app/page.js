import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 py-12">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-red-600 bg-clip-text text-transparent mb-4">
          RoadWatch Lite
        </h1>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Real-time platform tracking corruption and celebrating heroes across India
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Link href="/hero" className="group">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 card-shadow hover:scale-105 transition-transform">
            <div className="text-5xl mb-3">🦸</div>
            <h2 className="text-3xl font-bold text-green-700 mb-3">
              Hero Feed
            </h2>
            <p className="text-gray-700 text-lg">
              Discover inspiring acts of courage, honesty, and social service from across the nation
            </p>
            <div className="mt-4 badge-hero">View Heroes →</div>
          </div>
        </Link>

        <Link href="/corruption" className="group">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8 card-shadow hover:scale-105 transition-transform">
            <div className="text-5xl mb-3">🚨</div>
            <h2 className="text-3xl font-bold text-red-700 mb-3">
              Corruption Feed
            </h2>
            <p className="text-gray-700 text-lg">
              Stay informed about verified corruption cases, frauds, and scams
            </p>
            <div className="mt-4 badge-corruption">View Cases →</div>
          </div>
        </Link>
      </div>

      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 card-shadow">
        <h2 className="text-3xl font-bold text-white mb-4">Report an Incident</h2>
        <p className="text-blue-100 mb-6 text-lg">
          Help us build a more transparent India. Share verified reports of corruption or heroism.
        </p>
        <Link href="/submit" className="btn-primary inline-block">
          Submit a Report →
        </Link>
      </div>
    </div>
  );
}
