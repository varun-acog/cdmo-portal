'use client';
import { MessageSquare } from 'lucide-react';
import { materials, suppliers } from '@/lib/data';

export default function AnalyticsPage() {
  const totalSuppliers = suppliers.length;
  const totalMaterials = materials.length;
  const avgLeadTime = materials.reduce((sum, m) => {
    const [min, max] = m.leadTime.split('-').map((t) => parseInt(t));
    return sum + (min + max) / 2;
  }, 0) / totalMaterials;
  const highRiskSuppliers = suppliers.filter((s) => s.riskRating === 'Medium' || s.riskRating === 'High').length;
  const supplierComplianceRate = Math.round(
    suppliers.reduce((sum, s) => {
      const rate = parseFloat(s.contract.qualityMetrics.match(/\d+%/)?.[0] || '0');
      return sum + rate;
    }, 0) / totalSuppliers
  );

  const geopoliticalRisks = [
    {
      region: 'North America',
      risk: 'Stable with minor tariff adjustments expected in Q2 2025.',
      impact: 'Low impact on lead times, slight cost increase possible.',
    },
    {
      region: 'Europe',
      risk: 'Regulatory changes in EU affecting biologics compliance starting Q4 2025.',
      impact: 'Moderate delays in approvals, increased compliance costs.',
    },
    {
      region: 'Asia Pacific',
      risk: 'Port congestion in China and trade tensions with US affecting shipments.',
      impact: 'Lead time extensions of 1-2 weeks, cost volatility.',
    },
    {
      region: 'Northern Europe',
      risk: 'Very stable, no significant risks identified.',
      impact: 'Minimal impact on supply chain.',
    },
    {
      region: 'South America',
      risk: 'Currency fluctuations and moderate political instability.',
      impact: 'Pricing variability, potential delays in logistics.',
    },
  ];

  const onTimeDelivery = 92;
  const supplierQualityRating = supplierComplianceRate - 5;
  const costVariance = 12;

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Supply Chain Analytics</h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask LLM
          </button>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Geopolitical & Regional Risk Assessment</h3>
          </div>
          <div className="px-6 py-5">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Analysis based on current supplier regions as of April 04, 2025, indicates varied risk levels across key operational areas.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {geopoliticalRisks.map((risk, index) => (
                  <li key={index}>
                    <strong>{risk.region}:</strong> {risk.risk} <em>({risk.impact})</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Supply Chain Risk Index</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {highRiskSuppliers / totalSuppliers > 0.5 ? 'High' : highRiskSuppliers / totalSuppliers > 0.3 ? 'Medium' : 'Low'}
              </dd>
              <div className="mt-4">
                <div
                  className={`rounded-full h-2 ${
                    highRiskSuppliers / totalSuppliers > 0.5 ? 'bg-red-100' : 'bg-yellow-100'
                  }`}
                  style={{ width: `${(highRiskSuppliers / totalSuppliers) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Supplier Compliance Rate</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{supplierComplianceRate}%</dd>
              <div className="mt-4">
                <div className="bg-green-100 rounded-full h-2" style={{ width: `${supplierComplianceRate}%` }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Critical Material Risk</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {materials.some((m) => m.supplyRisk.level === 'High')
                  ? 'High'
                  : materials.some((m) => m.supplyRisk.level === 'Medium')
                  ? 'Medium'
                  : 'Low'}
              </dd>
              <div className="mt-4">
                <div
                  className={`rounded-full h-2 ${
                    materials.some((m) => m.supplyRisk.level === 'High') ? 'bg-red-100' : 'bg-yellow-100'
                  }`}
                  style={{ width: `${(materials.filter((m) => m.supplyRisk.level !== 'Low').length / totalMaterials) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Supply Chain Health Indicators</h3>
          </div>
          <div className="px-6 py-5">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">On-Time Delivery Performance</h4>
                <div className="mt-2 flex items-center">
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 rounded-full h-2" style={{ width: `${onTimeDelivery}%` }}></div>
                    </div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">{onTimeDelivery}%</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Based on industry benchmarks and supplier capacity data.</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Supplier Quality Rating</h4>
                <div className="mt-2 flex items-center">
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 rounded-full h-2" style={{ width: `${supplierQualityRating}%` }}></div>
                    </div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">{supplierQualityRating}%</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Derived from average supplier quality metrics.</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Cost Variance</h4>
                <div className="mt-2 flex items-center">
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 rounded-full h-2" style={{ width: `${costVariance}%` }}></div>
                    </div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">+{costVariance}%</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Reflects pricing variability from AsiaPharma Tech and LatAm Pharmaceuticals.</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Average Lead Time</h4>
                <div className="mt-2 flex items-center">
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-500 rounded-full h-2" style={{ width: `${(avgLeadTime / 45) * 100}%` }}></div>
                    </div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">{Math.round(avgLeadTime)} days</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Calculated from material lead times (max assumed 45 days).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
