// frontend/app/submit/page.js
'use client';
import SubmitForm from '@/components/SubmitForm.jsx';

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Submit a Report
        </h1>
        <p className="text-gray-600">
          Help build a transparent India by reporting verified incidents
        </p>
      </div>
      
      <SubmitForm />
    </div>
  );
}
