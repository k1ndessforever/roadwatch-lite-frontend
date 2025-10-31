// frontend/components/LiveFeed.jsx
'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ReportCard from './ReportCard';

export default function LiveFeed({ feedType }) {
  const [reports, setReports] = useState([]);
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial reports
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/feed/${feedType}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setReports(data.reports);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching reports:', err);
        setLoading(false);
      });

    // Connect to WebSocket
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
    newSocket.emit('subscribe:feed', feedType);
    
    newSocket.on('update:feed', (newReport) => {
      setReports(prev => [newReport, ...prev].slice(0, 50));
    });
    
    newSocket.on('appreciation:update', ({ reportId, count }) => {
      setReports(prev => prev.map(report => 
        report.id === reportId 
          ? { ...report, appreciation_count: count }
          : report
      ));
    });
    
    setSocket(newSocket);
    
    return () => {
      newSocket.emit('unsubscribe:feed', feedType);
      newSocket.close();
    };
  }, [feedType]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reports.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No reports yet</p>
      ) : (
        reports.map(report => (
          <ReportCard key={report.id} report={report} />
        ))
      )}
    </div>
  );
}
