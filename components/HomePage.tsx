'use client';
import { Flame, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { alerts, suppliers } from '@/lib/data';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export default function HomePage() {
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'High':
        return <Flame className="text-red-500" aria-label="High Risk" />;
      case 'Medium':
        return <AlertTriangle className="text-yellow-500" aria-label="Medium Risk" />;
      case 'Low':
        return <CheckCircle className="text-green-500" aria-label="Low Risk" />;
      default:
        return null;
    }
  };

  const getPerformanceIcon = (trend: string) => {
    switch (trend) {
      case 'Up':
        return <TrendingUp className="text-green-600" aria-label="Improving Performance" />;
      case 'Down':
        return <TrendingDown className="text-red-600" aria-label="Declining Performance" />;
      default:
        return null;
    }
  };

  const topPerformers = [
    {
      name: 'Catalent',
      performance: '98% on-time delivery, A+ quality rating',
      pastPerformance: 'Up',
    },
    {
      name: 'Patheon',
      performance: '95% on-time delivery, A quality rating',
      pastPerformance: 'Up',
    },
    {
      name: 'Sartorius',
      performance: '97% on-time delivery, A quality rating',
      pastPerformance: 'Up',
    },
  ];

  return (
    <div className="py-8 h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col min-h-0">
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Quick Analytics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-indigo-600 text-sm font-medium">Active Contracts</p>
              <p className="text-2xl font-bold text-indigo-900">24</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-600 text-sm font-medium">Contracts Expiring This Month</p>
              <p className="text-2xl font-bold text-red-900">3</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-600 text-sm font-medium">Supply Risk Level</p>
              <p className="text-2xl font-bold text-green-900">Low</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Suppliers with Geopolitical Risks</h2>
            <div className="flex-1 overflow-y-auto max-h-72 min-h-0">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Risk</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm">Asymchem (China)</td>
                    <td className="px-4 py-2 text-sm text-gray-600">New Trump Tariffs</td>
                    <td className="px-4 py-2">{getRiskIcon('High')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">WuXi AppTec (China)</td>
                    <td className="px-4 py-2 text-sm text-gray-600">New Trump Tariffs</td>
                    <td className="px-4 py-2">{getRiskIcon('High')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">Lonza (Switzerland)</td>
                    <td className="px-4 py-2 text-sm text-gray-600">EU regulatory changes</td>
                    <td className="px-4 py-2">{getRiskIcon('Medium')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">Samsung Biologics (South Korea)</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Regional political instability</td>
                    <td className="px-4 py-2">{getRiskIcon('Medium')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Contracts Expiring Within 30 Days ⏳</h2>
            <div className="overflow-y-auto max-h-72 space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Thermo Fisher Scientific</p>
                <p className="text-sm text-gray-500">Expires: Apr 15, 2025</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Merck KGaA</p>
                <p className="text-sm text-gray-500">Expires: Apr 28, 2025</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Halochem</p>
                <p className="text-sm text-gray-500">Expires: Apr 30, 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Top Performing Suppliers 👏</h2>
            <div className="overflow-y-auto max-h-72 space-y-4">
              {topPerformers.map((supplier, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">{supplier.name}</p>
                  <p className="text-sm text-gray-500">{supplier.performance}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600 mr-2">Past Performance:</span>
                    {getPerformanceIcon(supplier.pastPerformance)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
