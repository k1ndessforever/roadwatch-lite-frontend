import './globals.css';
import Header from '../../components/Header';

export const metadata = {
  title: 'RoadWatch Lite - Transparency Platform',
  description: 'Real-time corruption and hero tracking platform for India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 RoadWatch Lite. Building transparency, one report at a time.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
