// frontend/components/ReportCard.jsx
'use client';
import { useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

export default function ReportCard({ report }) {
  const [appreciations, setAppreciations] = useState(report.appreciation_count || 0);
  const [appreciated, setAppreciated] = useState(false);

  const handleAppreciate = async () => {
    if (appreciated) return;
    
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reports/${report.id}/appreciate`
      );
      
      if (response.data.success) {
        setAppreciations(response.data.count);
        setAppreciated(true);
      }
    } catch (error) {
      console.error('Appreciation error:', error);
    }
  };

  const cardColor = report.type === 'hero' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50';
  const badgeColor = report.type === 'hero' ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className={`border-2 ${cardColor} rounded-lg p-6 hover:shadow-md transition`}>
      <div className="flex justify-between items-start mb-3">
        <span className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {report.type === 'hero' ? '🦸 Hero' : '🚨 Corruption'}
        </span>
        
        {report.trust_score && (
          <span className="text-sm text-gray-600">
            Trust: {report.trust_score}/100
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {report.title}
      </h3>

      <p className="text-gray-700 mb-4">
        {report.description.substring(0, 300)}
        {report.description.length > 300 && '...'}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {report.location && (
          <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">
            📍 {report.location}
          </span>
        )}
        {report.category && (
          <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">
            🏷️ {report.category}
          </span>
        )}
        {report.source_verified && (
          <span className="text-sm bg-blue-100 px-3 py-1 rounded-full text-blue-700">
            ✓ Verified
          </span>
        )}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>
          {report.source_url && (
            <a 
              href={report.source_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Source
            </a>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span>
            {formatDistanceToNow(new Date(report.created_at), { addSuffix: true })}
          </span>
          
          <button
            onClick={handleAppreciate}
            disabled={appreciated}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
              appreciated 
                ? 'bg-gray-200 text-gray-600 cursor-not-allowed' 
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            👏 {appreciations}
          </button>
        </div>
      </div>
    </div>
  );
}
