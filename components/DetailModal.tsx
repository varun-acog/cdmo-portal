'use client';
import React from 'react';
import Modal from 'react-modal';
import { AlertTriangle, X } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import Next.js router for navigation

interface ChemicalProfile {
  molecularWeight: string;
  purity: string;
  form: string;
  stability: string;
}

interface Manufacturing {
  process?: string;
  quality?: string;
  batchSize?: string;
  capabilities?: string;
  capacities?: string;
}

interface SupplyRisk {
  level: string;
  factors: string[];
  mitigation: string;
}

interface Contract {
  length: string;
  expiry: string;
  terms: string;
  exclusivity: string;
  qualityMetrics: string;
}

interface Geopolitical {
  region: string;
  tradeAgreements: string[];
  politicalStability: string;
  logisticsRisk: string;
  additionalRisk?: string;
}

interface Financial {
  rating: string;
  marketCap: string;
  revenue: string;
}

interface ESG {
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
  certifications: string[];
}

interface Profile {
  background: string;
  generalInfo: string;
}

interface GeographicPresence {
  locations: string[];
  infrastructure: string;
}

interface Quality {
  compliance: string[];
  qualitySystems: string;
  auditHistory: string;
  certifications: string[];
}

interface Pricing {
  structures: string;
  paymentTerms: string;
  financialStability: string;
  negotiationLevers: string;
  costTransparency: string;
}

interface SupplierDetail {
  name: string;
  materials: string[];
}

interface Material {
  id: number;
  name: string;
  cas: string;
  grade: string;
  price: string;
  leadTime: string;
  chemicalProfile: ChemicalProfile;
  manufacturing: Manufacturing;
  supplyRisk: SupplyRisk;
  substitutes: string[];
  suppliers: string[];
}

interface Supplier {
  id: number;
  name: string;
  region: string;
  contract: Contract;
  capacity: string;
  compliance: string[];
  riskRating: string;
  geopolitical: Geopolitical;
  financial: Financial;
  esg: ESG;
  alternateProducts: string[];
  riskAlerts: string[];
  profile?: Profile;
  manufacturing?: Manufacturing;
  geographicPresence?: GeographicPresence;
  quality?: Quality;
  pricing?: Pricing;
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Material | Supplier | null;
  type: 'material' | 'supplier';
}

export default function DetailModal({ isOpen, onClose, data, type }: DetailModalProps) {
  const router = useRouter();

  const handleViewFullReport = () => {
    if (data && 'name' in data) {
      router.push(`/suppliers/report?name=${encodeURIComponent(data.name)}`); // Navigate to report page
    }
  };

  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleViewFullReport}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-900"
          >
            View Full Report
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Close</span>
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {type === 'material' ? (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Chemical Profile</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><strong>Molecular Weight:</strong> {(data as Material).chemicalProfile.molecularWeight}</div>
              <div><strong>Purity:</strong> {(data as Material).chemicalProfile.purity}</div>
              <div><strong>Form:</strong> {(data as Material).chemicalProfile.form}</div>
              <div><strong>Stability:</strong> {(data as Material).chemicalProfile.stability}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Manufacturing</h3>
            <div className="space-y-2">
              <div><strong>Process:</strong> {(data as Material).manufacturing.process}</div>
              <div><strong>Quality:</strong> {(data as Material).manufacturing.quality}</div>
              <div><strong>Batch Size:</strong> {(data as Material).manufacturing.batchSize}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Supply Risk</h3>
            <div className="space-y-2">
              <div><strong>Risk Level:</strong> {(data as Material).supplyRisk.level}</div>
              <div><strong>Risk Factors:</strong> {(data as Material).supplyRisk.factors.join(', ')}</div>
              <div><strong>Mitigation Strategy:</strong> {(data as Material).supplyRisk.mitigation}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Substitutes & Suppliers</h3>
            <div className="space-y-2">
              <div><strong>Substitutes:</strong></div>
              <ul className="list-disc pl-5">
                {(data as Material).substitutes.map((sub, index) => (
                  <li key={index}>{sub}</li>
                ))}
              </ul>
              <div><strong>Associated Suppliers:</strong></div>
              <ul className="list-disc pl-5">
                {(data as Material).suppliers.map((supplier, index) => (
                  <li key={index}>{supplier}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Risk Alerts at the Top */}
          {(data as Supplier).riskAlerts && (data as Supplier).riskAlerts.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center text-red-700">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Risk Alerts
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                {(data as Supplier).riskAlerts.map((alert, index) => (
                  <li key={index} className="text-red-600">{alert}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Contract Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><strong>Length:</strong> {(data as Supplier).contract.length}</div>
              <div><strong>Expiry:</strong> {(data as Supplier).contract.expiry}</div>
              <div><strong>Terms:</strong> {(data as Supplier).contract.terms}</div>
              <div><strong>Exclusivity:</strong> {(data as Supplier).contract.exclusivity}</div>
              <div><strong>Quality Metrics:</strong> {(data as Supplier).contract.qualityMetrics}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Supplier Profiles</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">2.1 Company Background and General Information</h4>
                <p><strong>Background:</strong> {(data as Supplier).profile?.background || 'N/A'}</p>
                <p><strong>General Info:</strong> {(data as Supplier).profile?.generalInfo || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">2.2 Manufacturing Capabilities and Capacities</h4>
                <p><strong>Capabilities:</strong> {(data as Supplier).manufacturing?.capabilities || (data as Supplier).manufacturing?.process || 'N/A'}</p>
                <p><strong>Capacities:</strong> {(data as Supplier).manufacturing?.capacities || (data as Supplier).capacity || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">2.3 Geographic Presence and Infrastructure</h4>
                <p><strong>Locations:</strong> {(data as Supplier).geographicPresence?.locations?.join(', ') || (data as Supplier).region || 'N/A'}</p>
                <p><strong>Infrastructure:</strong> {(data as Supplier).geographicPresence?.infrastructure || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Supplier Quality and Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">3.1 Compliance with Industry Standards and Regulatory Bodies</h4>
                <p><strong>Compliance:</strong> {(data as Supplier).quality?.compliance?.join(', ') || (data as Supplier).compliance.join(', ') || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">3.2 Quality Assurance and Control Systems</h4>
                <p><strong>Quality Systems:</strong> {(data as Supplier).quality?.qualitySystems || (data as Supplier).manufacturing?.quality || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">3.3 Audit History and Certifications</h4>
                <p><strong>Audit History:</strong> {(data as Supplier).quality?.auditHistory || 'N/A'}</p>
                <p><strong>Certifications:</strong> {(data as Supplier).quality?.certifications?.join(', ') || (data as Supplier).esg.certifications.join(', ') || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Pricing and Contract Terms</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">4.1 Pricing Structures (Spot vs. Contract)</h4>
                <p><strong>Structures:</strong> {(data as Supplier).pricing?.structures || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">4.2 Payment Terms and Financial Stability</h4>
                <p><strong>Payment Terms:</strong> {(data as Supplier).pricing?.paymentTerms || (data as Supplier).contract.terms || 'N/A'}</p>
                <p><strong>Financial Stability:</strong> {(data as Supplier).pricing?.financialStability || (data as Supplier).financial.rating || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">4.3 Negotiation Levers and Cost Transparency</h4>
                <p><strong>Negotiation Levers:</strong> {(data as Supplier).pricing?.negotiationLevers || 'N/A'}</p>
                <p><strong>Cost Transparency:</strong> {(data as Supplier).pricing?.costTransparency || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Financial & ESG</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Financial</h4>
                <div><strong>Rating:</strong> {(data as Supplier).financial.rating}</div>
                <div><strong>Market Cap:</strong> {(data as Supplier).financial.marketCap}</div>
                <div><strong>Revenue:</strong> {(data as Supplier).financial.revenue}</div>
              </div>
              <div>
                <h4 className="font-medium mb-2">ESG Scores</h4>
                <div><strong>Environmental:</strong> {(data as Supplier).esg.environmentalScore}</div>
                <div><strong>Social:</strong> {(data as Supplier).esg.socialScore}</div>
                <div><strong>Governance:</strong> {(data as Supplier).esg.governanceScore}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Geopolitical Factors</h3>
            <div className="space-y-2">
              <div><strong>Region Stability:</strong> {(data as Supplier).geopolitical.region}</div>
              <div><strong>Trade Agreements:</strong> {(data as Supplier).geopolitical.tradeAgreements.join(', ')}</div>
              <div><strong>Political Stability:</strong> {(data as Supplier).geopolitical.politicalStability}</div>
              <div><strong>Logistics Risk:</strong> {(data as Supplier).geopolitical.logisticsRisk}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Alternate Products</h3>
            <ul className="list-disc pl-5 space-y-2">
              {(data as Supplier).alternateProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
}