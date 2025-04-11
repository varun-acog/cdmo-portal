'use client'; // Mark the entire file as a Client Component
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Define the types for the report structure
interface Subsection {
  subtitle: string;
  content: string | React.ReactNode; // Allow string or JSX elements
}

interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

interface ReportData {
  title: string;
  sections: Section[];
}

const reports: { [key: string]: ReportData } & { Huntsman: ReportData } = {
  'Huntsman': {
    title: 'Supplier Report: Huntsman',
    sections: [
      {
        id: 'executive-summary',
        title: '1. Executive Summary',
        subsections: [
          {
            subtitle: '1.1 Purpose and Scope',
            content: 'This report provides an in-depth evaluation of Huntsman, focusing on its capabilities in specialty chemicals, intermediates, and polymer solutions relevant to pharmaceutical and allied industries. It assesses operational stability, compliance, pricing structures, and potential risk factors that may impact reliable supply for pharma applications.',
          },
          {
            subtitle: '1.2 Key Highlights',
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li>Headquarters: The Woodlands, Texas (USA), with a global presence</li>
                <li>Product Lines: Specialty amines, polyurethanes, adhesives, possible synergy with pharma coatings or excipients</li>
                <li>Contract Expiry: Multi-year agreements common for large-scale polymer or amine lines; recommended renewal ~6 months prior</li>
                <li>Potential Disruptions: Gulf Coast storms, feedstock cost volatility, occasional shipping delays</li>
              </ul>
            ),
          },
        ],
      },
      {
        id: 'supplier-profiles',
        title: '2. Supplier Profiles',
        subsections: [
          {
            subtitle: '2.1 Company Background and General Information',
            content: (
              <>
                <p><strong>Founding & History:</strong> Founded by Jon Huntsman Sr. in 1970; grew significantly via acquisitions in the polyurethanes and advanced chemicals space.</p>
                <p><strong>Corporate Structure:</strong> Publicly traded, with multiple business divisions (Polyurethanes, Performance Products, etc.).</p>
                <p><strong>Product Portfolio:</strong> Wide range, including polyurethanes, specialty amines, epoxy-based solutions, some of which have relevance for pharmaceutical adhesives or advanced polymeric intermediates.</p>
              </>
            ),
          },
          {
            subtitle: '2.2 Manufacturing Capabilities and Capacities',
            content: (
              <>
                <p><strong>Production Facilities:</strong> Major plants in the US (Gulf region), plus Europe and Asia expansions.</p>
                <p><strong>Annual Capacity:</strong> Large-scale polyurethanes (several hundred thousand metric tons), amines in the tens of thousands.</p>
                <p><strong>Technology:</strong> Combination of continuous-flow production for high-volume lines and batch setups for specialty chemistries.</p>
              </>
            ),
          },
          {
            subtitle: '2.3 Geographic Presence and Infrastructure',
            content: (
              <>
                <p><strong>Logistics Hubs:</strong> Key distribution centers near the US Gulf Coast, plus warehouses in Europe (Netherlands, Germany) and Asia (China).</p>
                <p><strong>Export Reach:</strong> Sizable shipments to North America, Europe, parts of Asia.</p>
                <p><strong>Infrastructure Strengths:</strong> Established shipping routes for chemicals, though occasionally subject to severe weather in the Gulf region.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'quality-certifications',
        title: '3. Supplier Quality and Certifications',
        subsections: [
          {
            subtitle: '3.1 Compliance with Industry Standards and Regulatory Bodies',
            content: (
              <p>
                <strong>ISO Certifications:</strong> Many sites hold ISO 9001 for quality management.{' '}
                <strong>Pharma-Relevant Lines:</strong> Some lines follow cGMP-like protocols, but formal GMP certification is typically limited to specific specialty products.{' '}
                <strong>Regulatory Registrations:</strong> Compliance with TSCA (US) and REACH (EU) for major product lines.
              </p>
            ),
          },
          {
            subtitle: '3.2 Quality Assurance and Control Systems',
            content: (
              <>
                <p><strong>QA Laboratory:</strong> Equipped to test polymer properties (viscosity, reactivity), amine purity, etc.</p>
                <p><strong>In-Process Monitoring:</strong> Automated systems track temperature, pressure, and flow rates in continuous production lines.</p>
                <p><strong>Documentation:</strong> Comprehensive batch records; CoAs generated for relevant shipments.</p>
              </>
            ),
          },
          {
            subtitle: '3.3 Audit History and Certifications',
            content: (
              <>
                <p><strong>Internal Audits:</strong> Conducted regularly, focusing on EHS protocols and SOP adherence.</p>
                <p><strong>External Audits:</strong> Major industrial and some pharma clients have audited specialized lines with no major non-conformances reported.</p>
                <p><strong>Future Plans:</strong> Considering expansions of specialized lines that might lead to partial GMP certification if pharma demand arises.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'pricing-terms',
        title: '4. Pricing and Contract Terms',
        subsections: [
          {
            subtitle: '4.1 Pricing Structures (Spot vs. Contract)',
            content: (
              <>
                <p><strong>Spot Purchasing:</strong> Common for commodity-based polyols or amines with short-term needs.</p>
                <p><strong>Annual/Biannual Contracts:</strong> Typically favored by larger clients for stable volumes and partial cost insulation (index-linked for feedstocks).</p>
              </>
            ),
          },
          {
            subtitle: '4.2 Payment Terms and Financial Stability',
            content: (
              <>
                <p><strong>Standard Terms:</strong> Net 30–60 days, with occasional discounts for early payment.</p>
                <p><strong>Financial Health:</strong> Huntsman remains financially stable; no major credit concerns.</p>
                <p><strong>Contract Expiration:</strong> Typically 2–3 years for key lines, recommended renewal ~6 months before end date.</p>
              </>
            ),
          },
          {
            subtitle: '4.3 Negotiation Levers and Cost Transparency',
            content: (
              <>
                <p><strong>Volume-Based Rebates:</strong> Tiered discount structures for large annual volumes.</p>
                <p><strong>Index-Linked Adjustments:</strong> Tied to cost of raw materials (e.g., propylene, benzene, or other feedstocks).</p>
                <p><strong>Open-Book Elements:</strong> Limited overhead disclosure; feedstock costs may be partially itemized for major strategic partners.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'supply-reliability',
        title: '5. Supply Reliability and Risks',
        subsections: [
          {
            subtitle: '5.1 Historical Delivery Performance',
            content: (
              <>
                <p><strong>On-Time Delivery (OTD):</strong> Averages 93–95% globally; some variability tied to US Gulf Coast disruptions.</p>
                <p><strong>Lead Times:</strong> Usually 2–4 weeks within North America; up to 6–8 weeks overseas.</p>
              </>
            ),
          },
          {
            subtitle: '5.2 Risk Factors (Operational, Geopolitical, Environmental)',
            content: (
              <>
                <p><strong>Operational:</strong> Maintenance or expansions can temporarily reduce capacity.</p>
                <p><strong>Geopolitical:</strong> Primarily impacted by US trade policies or tariffs that can affect raw materials or exports.</p>
                <p><strong>Environmental:</strong> Gulf Coast storms (hurricanes) pose occasional shutdown or logistic challenges.</p>
              </>
            ),
          },
          {
            subtitle: '5.3 Contingency Measures and Disaster Recovery Plans',
            content: (
              <>
                <p><strong>Inventory Buffer:</strong> Recommends a 2–3 week stock for critical SKUs due to weather unpredictability.</p>
                <p><strong>Backup Production:</strong> Some lines replicated in Europe or Asia for global customers.</p>
                <p><strong>Emergency Logistics:</strong> Maintains relationships with multiple freight providers to reroute or expedite if main routes are compromised.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'logistics',
        title: '6. Logistics and Transportation',
        subsections: [
          {
            subtitle: '6.1 Shipping Methods and Hazardous Material Handling',
            content: (
              <>
                <p><strong>Hazard Classification:</strong> Many amines and intermediates classified as corrosive or flammable, necessitating UN-approved containers.</p>
                <p><strong>Preferred Modes:</strong> Road and rail within the US; sea freight for intercontinental shipments; air freight rarely used except for urgent deliveries.</p>
              </>
            ),
          },
          {
            subtitle: '6.2 Freight and Logistics Costs',
            content: (
              <>
                <p><strong>Baseline Freight:</strong> Typically moderate in the US, with possible surcharges for hazmat materials.</p>
                <p><strong>Additional Expenses:</strong> Fuel adjustments, specialized containers if required for certain reactivity or temperature needs.</p>
              </>
            ),
          },
          {
            subtitle: '6.3 Lead Times and Inventory Practices',
            content: (
              <>
                <p><strong>Domestic:</strong> 2–4 weeks post-QC release.</p>
                <p><strong>International:</strong> 4–8 weeks port-to-port, factoring shipping schedules.</p>
                <p><strong>Consignment/Buffer:</strong> Some VMI programs for large-volume customers, subject to contract terms.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'technical-support',
        title: '7. Technical Support and Innovation',
        subsections: [
          {
            subtitle: '7.1 Technical Assistance and Customer Support Capabilities',
            content: (
              <>
                <p><strong>Product Guidance:</strong> Technical teams advise on amine usage, polymer formulations, or process optimization.</p>
                <p><strong>Hotline:</strong> Monday–Friday business hours, plus limited after-hours email support.</p>
              </>
            ),
          },
          {
            subtitle: '7.2 Research and Development Focus',
            content: (
              <>
                <p><strong>R&D:</strong> Specialized in advanced amine chemistries, polymer enhancements, potential synergy with pharma coatings or adhesives.</p>
                <p><strong>Collaboration:</strong> Some joint projects with research institutions or industrial partners to develop novel polymer solutions.</p>
              </>
            ),
          },
          {
            subtitle: '7.3 Collaboration Opportunities',
            content: (
              <>
                <p><strong>Customized Formulations:</strong> Willing to tailor polymer or amine specs for niche applications.</p>
                <p><strong>Licensing:</strong> Typically not licensed out; Huntsman prefers in-house production but might consider JV for large-scale expansions.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'sustainability',
        title: '8. Supplier Sustainability and Ethical Practices',
        subsections: [
          {
            subtitle: '8.1 Environmental Responsibility and Initiatives',
            content: (
              <>
                <p><strong>Emission Reductions:</strong> Working to minimize VOCs and greenhouse gases, focusing on improved process efficiencies.</p>
                <p><strong>Energy Optimization:</strong> Some plants adopting combined heat and power (CHP) systems for better energy utilization.</p>
                <p><strong>Waste Management:</strong> Encourages solvent recycling and safe disposal compliance.</p>
              </>
            ),
          },
          {
            subtitle: '8.2 Ethical Sourcing and Labor Practices',
            content: (
              <>
                <p><strong>Code of Conduct:</strong> Global standard addressing labor, anti-corruption; vendor checks for high-risk regions.</p>
                <p><strong>Local Community Engagement:</strong> Some philanthropic programs or scholarships in the Gulf Coast region.</p>
              </>
            ),
          },
          {
            subtitle: '8.3 Corporate Social Responsibility (CSR) Programs',
            content: (
              <>
                <p><strong>Public Reporting:</strong> Annual sustainability updates highlight EHS progress, energy saving initiatives.</p>
                <p><strong>Future Plans:</strong> Evaluating broader alignment with frameworks like Responsible Care® or additional ESG disclosures.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'performance-reviews',
        title: '9. Performance Reviews and Supplier Ratings',
        subsections: [
          {
            subtitle: '9.1 Supplier Performance Metrics',
            content: (
              <>
                <p><strong>Quality Acceptance:</strong> ~95% for standardized amine lines, ~93% for specialized polymer formulations.</p>
                <p><strong>Safety Record:</strong> Minimal lost-time incidents, invests in extensive EHS training.</p>
              </>
            ),
          },
          {
            subtitle: '9.2 Comparative Analysis and Ratings',
            content: (
              <>
                <p><strong>Industry Standing:</strong> Known for polyurethanes and amines, mid-tier or premium pricing.</p>
                <p><strong>Competitor Benchmarking:</strong> Some smaller specialists may undercut on cost but lack Huntsman’s scale or reliability.</p>
              </>
            ),
          },
          {
            subtitle: '9.3 Customer Feedback and Case Studies',
            content: (
              <>
                <p><strong>Case Study:</strong> A major adhesives producer reported improved cure times using Huntsman’s amine hardeners, citing a 10% reduction in cycle time.</p>
                <p><strong>Testimonials:</strong> Positive on product consistency and decent lead times, though weather-related delays can occur.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'recommendations',
        title: '10. Recommendations and Supplier Selection Guidance',
        subsections: [
          {
            subtitle: '10.1 Recommended Suppliers by Region and Grade',
            content: (
              <>
                <p><strong>North America:</strong> Strong option for polymer or amine supply with moderate lead times.</p>
                <p><strong>Global:</strong> Overseas shipments feasible but plan for ~6–8-week lead times and possible weather disruptions.</p>
              </>
            ),
          },
          {
            subtitle: '10.2 Supplier Qualification Process',
            content: (
              <>
                <p><strong>Initial Screening:</strong> Confirm any cGMP-like process lines if relevant for pharmaceutical intermediates, request references.</p>
                <p><strong>Site Audit:</strong> Evaluate main US plant or relevant overseas sites.</p>
                <p><strong>Pilot Orders:</strong> Validate real-world lead times, QA processes, EHS compliance.</p>
              </>
            ),
          },
          {
            subtitle: '10.3 Strategic Recommendations for Supplier Relationships',
            content: (
              <>
                <p><strong>Monitor Contract End:</strong> Typical 2–3-year contracts, initiate renewals ~6 months before expiration.</p>
                <p><strong>Consider Weather Risk:</strong> Maintain stock buffers or secondary suppliers for critical volumes.</p>
                <p><strong>Collaborate on Custom Solutions:</strong> If advanced amine or polymer formulations are required, Huntsman is open to co-development.</p>
              </>
            ),
          },
        ],
      },
      {
        id: 'appendices',
        title: '11. Appendices',
        subsections: [
          {
            subtitle: '11.1 Supplier Contacts and Key Personnel',
            content: (
              <p>
                [Name] - CEO/Managing Director<br />
                [Name] - Head of Technical Services<br />
                [Name] - Key Account Manager
              </p>
            ),
          },
          {
            subtitle: '11.2 Compliance Documentation Examples',
            content: (
              <p>ISO Certificates (e.g., ISO 9001), TSCA/REACH Registrations, EHS Permits (local, federal)</p>
            ),
          },
          {
            subtitle: '11.3 Sample Audit Reports and Questionnaires',
            content: (
              <p>Internal QA Audit Summaries, Client Audit Templates (for verifying polymer or amine lines)</p>
            ),
          },
        ],
      },
    ],
  },
};

// Client Component to handle dynamic data
function ReportContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Huntsman';

  const reportData = reports[name] || { title: `No report available for ${name}`, sections: [] };

  return (
    <div className="container mx-auto p-6 max-w-6xl bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">{reportData.title}</h1>
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-200"
      >
        Back to Suppliers
      </button>

      <div className="space-y-8">
        {reportData.sections.map((section, index) => (
          <section key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 id={section.id} className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="pl-4 border-l-2 border-indigo-200">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">{subsection.subtitle}</h3>
                  <div className="text-gray-600 leading-relaxed">{subsection.content}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// Client Component to wrap with Suspense (optional, but included for consistency)
export default function ReportPage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-6 text-center">Loading report...</div>}>
      <ReportContent />
    </Suspense>
  );
}