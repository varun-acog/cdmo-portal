'use client';
import React from 'react';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import DetailModal from './DetailModal';
import { materials } from '@/lib/data';

export default function MaterialsPage() {
  const [selectedMaterial, setSelectedMaterial] = useState<(typeof materials)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!materials || materials.length === 0) {
    return <div className="py-8 text-center">No materials data available.</div>;
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Materials</h2>
          <div className="mt-3 sm:mt-0 sm:ml-4 flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Export List
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
              <MessageSquare className="w-4 h-4 mr-2" />
              Ask LLM
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CAS #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {materials.map((material) => (
                <tr
                  key={material.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setSelectedMaterial(material);
                    setIsModalOpen(true);
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{material.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.cas}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.leadTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedMaterial(null);
          }}
          data={selectedMaterial}
          type="material"
        />
      </div>
    </div>
  );
}