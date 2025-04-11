'use client';
import React, { useState } from 'react';
import { MessageSquare, Flame, AlertTriangle, CheckCircle } from 'lucide-react';
import { programs } from '@/lib/data';

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState('All Programs');

  const programOptions = ['All Programs', ...programs.map((p) => p.programName)];

  const filteredPrograms =
    selectedProgram === 'All Programs'
      ? programs
      : programs.filter((p) => p.programName === selectedProgram);

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProgram(e.target.value);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Programs</h2>
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

        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <h3 className="text-lg font-medium text-gray-900">Filter Programs</h3>
              <p className="text-sm text-gray-500">Select a program to view details</p>
            </div>
            <div className="flex-1 sm:max-w-xs">
              <select
                value={selectedProgram}
                onChange={handleProgramChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {programOptions.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {selectedProgram !== 'All Programs' && (
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {selectedProgram}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapeutic Area</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Criticality</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suppliers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materials</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((program) => (
                  <React.Fragment key={program.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" rowSpan={program.suppliers.length || 1}>
                        {program.therapeuticArea}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={program.suppliers.length || 1}>
                        {program.programName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" rowSpan={program.suppliers.length || 1}>
                        {program.status === 'Active' && <CheckCircle className="w-5 h-5 text-green-600" aria-label="Active" />}
                        {program.status === 'Inactive' && <Flame className="w-5 h-5 text-red-600" aria-label="Inactive" />}
                        {program.status === 'Completed' && <AlertTriangle className="w-5 h-5 text-yellow-600" aria-label="Completed" />}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" rowSpan={program.suppliers.length || 1}>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            program.criticality === 'High'
                              ? 'bg-red-100 text-red-800'
                              : program.criticality === 'Low'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {program.criticality}
                        </span>
                      </td>
                      {program.suppliers.length > 0 && (
                        <>
                          <td className="px-6 py-2 text-sm text-gray-500">{program.suppliers[0].name}</td>
                          <td className="px-6 py-2 text-sm text-gray-500">{program.suppliers[0].materials.join(', ')}</td>
                        </>
                      )}
                    </tr>
                    {program.suppliers.slice(1).map((supplier, index) => (
                      <tr key={`${program.id}-supplier-${index}`} className="hover:bg-gray-50 border-t border-gray-200">
                        <td className="px-6 py-2 text-sm text-gray-500">{supplier.name}</td>
                        <td className="px-6 py-2 text-sm text-gray-500">{supplier.materials.join(', ')}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-500">
                    No programs found for the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
