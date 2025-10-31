'use client';

import { useEffect, useState } from 'react';

export default function LiveFeed({ feedType }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setReports([
        {
          id: 1,
          title: 'Sample Report',
          description: 'This is a sample report entry',
          date: new Date().toLocaleDateString(),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, [feedType]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reports.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-lg">No reports yet. Be the first to share!</p>
        </div>
      ) : (
        reports.map((report) => (
          <div key={report.id} className="bg-white rounded-lg p-6 card-shadow hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
            <p className="text-gray-700 mb-3">{report.description}</p>
            <p className="text-sm text-gray-500">{report.date}</p>
          </div>
        ))
      )}
    </div>
  );
}
