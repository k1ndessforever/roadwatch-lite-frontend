'use client';

import { useState } from 'react';

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'hero',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ title: '', description: '', type: 'hero' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 card-shadow space-y-6">
        <div>
          <label className="block text-gray-900 font-semibold mb-2">Report Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-600 outline-none"
          >
            <option value="hero">🦸 Hero Report</option>
            <option value="corruption">🚨 Corruption Report</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Brief title of the incident"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-600 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Detailed description..."
            rows="6"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-600 outline-none resize-none"
            required
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          {submitted ? '✓ Submitted!' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
}
