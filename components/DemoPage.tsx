'use client';
import Navbar from './Navbar';

export default function DemoPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Agentic AI Demo</h2>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden p-6">
          {/* <h3 className="text-lg font-medium text-gray-900 mb-4">LLM Response Demonstration</h3> */}
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Kiq6JzL2R1I"
              title="LLM Response Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
