// frontend/app/layout.js
import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'RoadWatch Lite - Transparency Platform',
  description: 'Real-time corruption and hero tracking platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
