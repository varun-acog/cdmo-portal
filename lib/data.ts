// lib/data.ts
import { format, addDays } from 'date-fns';

export const programs: Array<{
  id: number;
  therapeuticArea: string;
  programName: string;
  status: string;
  criticality: string;
  suppliers: Array<{
    name: string;
    materials: string[];
  }>;
}> = [
  {
    id: 1,
    therapeuticArea: 'Central Nervous System (CNS)',
    programName: 'RD20',
    status: 'Active',
    criticality: 'High',
    suppliers: [
      {
        name: 'CDMO Alpha',
        materials: ['Chromatography Resins', 'Cell Culture Media'],
      },
      {
        name: 'BioProcess Solutions',
        materials: ['Monoclonal Antibodies'],
      },
    ],
  },
  {
    id: 2,
    therapeuticArea: 'Central Nervous System (CNS)',
    programName: 'CNS-45',
    status: 'Inactive',
    criticality: 'Low',
    suppliers: [
      {
        name: 'AsiaPharma Tech',
        materials: ['Cell Culture Media'],
      },
    ],
  },
  {
    id: 3,
    therapeuticArea: 'Oncology',
    programName: 'ONC-15',
    status: 'Completed',
    criticality: 'Medium',
    suppliers: [
      {
        name: 'Nordic Biotech',
        materials: ['PCR Master Mix'],
      },
      {
        name: 'LatAm Pharmaceuticals',
        materials: ['Cell Culture Media'],
      },
    ],
  },
  {
    id: 4,
    therapeuticArea: 'Immunology',
    programName: 'IMM-30',
    status: 'Active',
    criticality: 'Medium',
    suppliers: [
      {
        name: 'CDMO Alpha',
        materials: ['PG-Seq Indexing Primers'],
      },
      {
        name: 'BioProcess Solutions',
        materials: ['Monoclonal Antibodies', 'PCR Master Mix'],
      },
    ],
  },
];

export const materials: Array<{
  id: number;
  name: string;
  cas: string;
  grade: string;
  price: string;
  leadTime: string;
  chemicalProfile: {
    molecularWeight: string;
    purity: string;
    form: string;
    stability: string;
  };
  manufacturing: {
    process: string;
    quality: string;
    batchSize: string;
  };
  supplyRisk: {
    level: string;
    factors: string[];
    mitigation: string;
  };
  substitutes: string[];
  suppliers: string[];
}> = [
  {
    id: 1,
    name: 'PG-Seq Indexing Primers',
    cas: '123-45-6',
    grade: 'Pharma-grade',
    price: '$500/unit',
    leadTime: '14-21 days',
    chemicalProfile: {
      molecularWeight: '15,000-20,000 g/mol',
      purity: '≥98%',
      form: 'Lyophilized powder',
      stability: 'Stable at -20°C for 24 months',
    },
    manufacturing: {
      process: 'Solid-phase synthesis',
      quality: 'GMP certified',
      batchSize: '100-500 units',
    },
    supplyRisk: {
      level: 'Medium',
      factors: ['Limited manufacturers', 'Raw material dependency'],
      mitigation: 'Multiple supplier agreements in place',
    },
    substitutes: ['Modified Seq Primers (85% comparable)', 'Alternative Indexing Kit (70% comparable)'],
    suppliers: ['Supplier A', 'Supplier B', 'Supplier C'],
  },
  {
    id: 2,
    name: 'Monoclonal Antibodies',
    cas: '789-01-2',
    grade: 'Research-grade',
    price: '$2000/unit',
    leadTime: '30-45 days',
    chemicalProfile: {
      molecularWeight: '150,000 g/mol',
      purity: '≥95%',
      form: 'Liquid solution',
      stability: 'Stable at 4°C for 12 months',
    },
    manufacturing: {
      process: 'Cell culture and purification',
      quality: 'ISO 9001 certified',
      batchSize: '50-200 units',
    },
    supplyRisk: {
      level: 'Low',
      factors: ['Multiple manufacturers', 'Established process'],
      mitigation: 'Regular quality audits',
    },
    substitutes: ['Polyclonal antibodies (75% comparable)', 'Synthetic alternatives (60% comparable)'],
    suppliers: ['Supplier B', 'Supplier D'],
  },
  {
    id: 3,
    name: 'Chromatography Resins',
    cas: '456-78-9',
    grade: 'Analytical-grade',
    price: '$1500/unit',
    leadTime: '21-28 days',
    chemicalProfile: {
      molecularWeight: 'Variable',
      purity: '≥99%',
      form: 'Beaded matrix',
      stability: 'Stable at room temperature',
    },
    manufacturing: {
      process: 'Polymer synthesis and functionalization',
      quality: 'USP certified',
      batchSize: '200-1000 units',
    },
    supplyRisk: {
      level: 'High',
      factors: ['Raw material shortages', 'Complex manufacturing'],
      mitigation: 'Strategic stockpiling',
    },
    substitutes: ['Alternative resins (90% comparable)', 'Membrane technologies (65% comparable)'],
    suppliers: ['Supplier A', 'Supplier E'],
  },
  {
    id: 4,
    name: 'PCR Master Mix',
    cas: '234-56-7',
    grade: 'Molecular biology-grade',
    price: '$300/unit',
    leadTime: '7-10 days',
    chemicalProfile: {
      molecularWeight: 'N/A',
      purity: '≥99%',
      form: 'Solution',
      stability: 'Stable at -20°C for 18 months',
    },
    manufacturing: {
      process: 'Enzyme production and formulation',
      quality: 'ISO 13485 certified',
      batchSize: '500-2000 units',
    },
    supplyRisk: {
      level: 'Low',
      factors: ['Multiple suppliers', 'Standard formulation'],
      mitigation: 'Regular supplier audits',
    },
    substitutes: ['Individual PCR components (95% comparable)', 'Alternative enzyme blends (80% comparable)'],
    suppliers: ['Supplier C', 'Supplier D', 'Supplier E'],
  },
  {
    id: 5,
    name: 'Cell Culture Media',
    cas: '345-67-8',
    grade: 'Cell culture-grade',
    price: '$800/unit',
    leadTime: '14-21 days',
    chemicalProfile: {
      molecularWeight: 'N/A',
      purity: 'Sterile',
      form: 'Liquid',
      stability: 'Stable at 4°C for 6 months',
    },
    manufacturing: {
      process: 'Aseptic formulation',
      quality: 'GMP certified',
      batchSize: '300-1500 units',
    },
    supplyRisk: {
      level: 'Medium',
      factors: ['Component availability', 'Sterility requirements'],
      mitigation: 'Backup supplier network',
    },
    substitutes: ['Serum-free alternatives (85% comparable)', 'Chemically defined media (75% comparable)'],
    suppliers: ['Supplier B', 'Supplier D'],
  },
];

export const suppliers: Array<{
  id: number;
  name: string;
  region: string;
  contract: {
    length: string;
    expiry: string;
    terms: string;
    exclusivity: string;
    qualityMetrics: string;
  };
  capacity: string;
  compliance: string[];
  riskRating: string;
  geopolitical: {
    region: string;
    tradeAgreements: string[];
    politicalStability: string;
    logisticsRisk: string;
    additionalRisk?: string;
  };
  financial: {
    rating: string;
    marketCap: string;
    revenue: string;
  };
  esg: {
    environmentalScore: number;
    socialScore: number;
    governanceScore: number;
    certifications: string[];
  };
  alternateProducts: string[];
  riskAlerts: string[];
  profile: {
    background: string;
    generalInfo: string;
  };
  manufacturing: {
    capabilities: string;
    capacities: string;
  };
  geographicPresence: {
    locations: string[];
    infrastructure: string;
  };
  quality: {
    compliance: string[];
    qualitySystems: string;
    auditHistory: string;
    certifications: string[];
  };
  pricing: {
    structures: string;
    paymentTerms: string;
    financialStability: string;
    negotiationLevers: string;
    costTransparency: string;
  };
}> = [

  {
    id: 8,
    name: 'Huntsman',
    region: 'North America',
    contract: {
      length: '2-3 year contract',
      expiry: format(addDays(new Date('2025-04-09'), 730), 'MMM dd, yyyy'), // 2 years from now
      terms: 'Net 30-60 days, index-linked for feedstocks',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '~95% quality acceptance for standardized lines',
    },
    capacity: 'tens of thousands (amines)',
    compliance: ['ISO 9001', 'TSCA', 'REACH'],
    riskRating: 'Medium',
    geopolitical: {
      region: 'Stable (US Gulf Coast)',
      tradeAgreements: ['USMCA'],
      politicalStability: 'High',
      logisticsRisk: 'Medium',
      additionalRisk: 'Gulf Coast storms, potential trade tariffs',
    },
    financial: {
      rating: 'Stable (no major credit concerns)',
      marketCap: 'N/A (publicly traded)',
      revenue: 'N/A (financially stable)',
    },
    esg: {
      environmentalScore: 80, // Estimated based on initiatives
      socialScore: 75, // Estimated based on labor practices
      governanceScore: 85, // Estimated based on CSR
      certifications: ['ISO 9001'],
    },
    alternateProducts: ['Specialty amines', 'Polyurethanes', 'Epoxy-based solutions'],
    riskAlerts: [
      'Potential disruptions from Gulf Coast storms',
      'Feedstock cost volatility',
      'Occasional shipping delays',
    ],
    profile: {
      background: 'Founded by Jon Huntsman Sr. in 1970; grew via acquisitions in polyurethanes and advanced chemicals.',
      generalInfo: 'Publicly traded, headquartered in The Woodlands, Texas, with multiple divisions.',
    },
    manufacturing: {
      capabilities: 'Continuous-flow production, batch setups for specialty chemistries',
      capacities: 'Large-scale polyurethanes, tens of thousands of amines annually',
    },
    geographicPresence: {
      locations: ['USA (The Woodlands, TX)', 'Netherlands', 'Germany', 'China'],
      infrastructure: 'Key distribution centers near US Gulf Coast, warehouses in Europe and Asia',
    },
    quality: {
      compliance: ['ISO 9001', 'TSCA', 'REACH'],
      qualitySystems: 'Automated in-process monitoring, comprehensive batch records',
      auditHistory: 'Regular internal audits, no major non-conformances in external audits',
      certifications: ['ISO 9001'],
    },
    pricing: {
      structures: 'Spot purchasing for short-term needs, annual/biannual contracts for stable volumes',
      paymentTerms: 'Net 30-60 days, discounts for early payment',
      financialStability: 'Financially stable, no major credit concerns',
      negotiationLevers: 'Volume-based rebates, index-linked adjustments',
      costTransparency: 'Limited overhead disclosure, partial feedstock cost itemization',
    },
  },  
  {
    id: 2,
    name: 'CDMO Alpha',
    region: 'North America',
    contract: {
      length: '2-year contract',
      expiry: format(addDays(new Date('2025-04-09'), 120), 'MMM dd, yyyy'),
      terms: 'Net 60, Volume-based pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '98% acceptance rate required',
    },
    capacity: '200+ batch runs annually',
    compliance: ['ISO 9001', 'GMP'],
    riskRating: 'Low',
    geopolitical: {
      region: 'Stable',
      tradeAgreements: ['USMCA', 'CPTPP'],
      politicalStability: 'High',
      logisticsRisk: 'Low',
    },
    financial: {
      rating: 'A+',
      marketCap: '$2.5B',
      revenue: '$500M annually',
    },
    esg: {
      environmentalScore: 85,
      socialScore: 78,
      governanceScore: 92,
      certifications: ['ISO 14001', 'Carbon Neutral'],
    },
    alternateProducts: ['Chromatography Resins', 'Cell Culture Media', 'Filtration Systems'],
    riskAlerts: [
      'Minor supply chain disruption expected Q3 2024',
      'Planned facility maintenance in August 2024',
    ],
    profile: {
      background: 'Founded in 1995, CDMO Alpha specializes in biopharmaceutical manufacturing.',
      generalInfo: 'Employs 1,200 staff across 3 facilities, focusing on innovative therapies.',
    },
    manufacturing: {
      capabilities: 'Aseptic processing, lyophilization, and large-scale fermentation.',
      capacities: 'Up to 500L bioreactors and 200+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['USA (HQ)', 'Canada', 'Mexico'],
      infrastructure: '3 manufacturing plants, 2 distribution centers.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'FDA registered'],
      qualitySystems: 'Six Sigma, real-time quality monitoring.',
      auditHistory: 'Last audit: Q1 2024, no major findings.',
      certifications: ['ISO 14001', 'Carbon Neutral'],
    },
    pricing: {
      structures: 'Spot pricing for small orders; contract pricing for >100 units.',
      paymentTerms: 'Net 60 days, discounts for early payment.',
      financialStability: 'A+ rating, stable cash flow.',
      negotiationLevers: 'Volume discounts, long-term contracts.',
      costTransparency: 'Detailed cost breakdowns provided quarterly.',
    },
  },
  {
    id: 3,
    name: 'BioProcess Solutions',
    region: 'Europe',
    contract: {
      length: '3-year contract',
      expiry: format(addDays(new Date('2025-04-09'), 450), 'MMM dd, yyyy'),
      terms: 'Net 45, Fixed pricing',
      exclusivity: 'Semi-exclusive for certain products',
      qualityMetrics: '99% acceptance rate required',
    },
    capacity: '150+ batch runs annually',
    compliance: ['ISO 9001', 'GMP', 'EMA certified'],
    riskRating: 'Low',
    geopolitical: {
      region: 'Stable',
      tradeAgreements: ['EU', 'UK-EU TCA'],
      politicalStability: 'High',
      logisticsRisk: 'Low',
    },
    financial: {
      rating: 'A',
      marketCap: '$1.8B',
      revenue: '$350M annually',
    },
    esg: {
      environmentalScore: 90,
      socialScore: 85,
      governanceScore: 88,
      certifications: ['ISO 14001', 'EMAS'],
    },
    alternateProducts: ['Monoclonal Antibodies', 'PCR Reagents', 'Purification Systems'],
    riskAlerts: [
      'Regulatory changes expected in Q4 2024',
      'Investment in new production line ongoing',
    ],
    profile: {
      background: 'Established in 2000, BioProcess Solutions focuses on biologics production.',
      generalInfo: '700 employees, expertise in monoclonal antibodies and reagents.',
    },
    manufacturing: {
      capabilities: 'Cell culture, purification, and reagent formulation.',
      capacities: 'Up to 300L bioreactors, 150+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['Germany (HQ)', 'France', 'UK'],
      infrastructure: '2 manufacturing sites, 1 R&D center.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'EMA certified'],
      qualitySystems: 'Lean manufacturing, automated QC.',
      auditHistory: 'Last audit: Q3 2023, minor findings resolved.',
      certifications: ['ISO 14001', 'EMAS'],
    },
    pricing: {
      structures: 'Fixed pricing under contract, spot pricing available.',
      paymentTerms: 'Net 45 days, flexible for large orders.',
      financialStability: 'A rating, strong revenue growth.',
      negotiationLevers: 'Long-term commitments, quality guarantees.',
      costTransparency: 'Annual cost reports provided.',
    },
  },
  {
    id: 4,
    name: 'AsiaPharma Tech',
    region: 'Asia Pacific',
    contract: {
      length: '1-year contract',
      expiry: format(addDays(new Date('2025-04-09'), 180), 'MMM dd, yyyy'),
      terms: 'Net 30, Variable pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '97% acceptance rate required',
    },
    capacity: '300+ batch runs annually',
    compliance: ['ISO 9001', 'GMP', 'PMDA certified'],
    riskRating: 'Medium',
    geopolitical: {
      region: 'Moderate stability',
      tradeAgreements: ['RCEP', 'CPTPP'],
      politicalStability: 'Medium',
      logisticsRisk: 'Medium',
    },
    financial: {
      rating: 'BBB+',
      marketCap: '$900M',
      revenue: '$200M annually',
    },
    esg: {
      environmentalScore: 75,
      socialScore: 80,
      governanceScore: 82,
      certifications: ['ISO 14001'],
    },
    alternateProducts: ['Cell Culture Media', 'Laboratory Plastics', 'Basic Chemicals'],
    riskAlerts: [
      'Port congestion affecting shipment times',
      'Expansion into new product lines planned',
    ],
    profile: {
      background: 'Started in 2010, AsiaPharma Tech excels in cost-effective production.',
      generalInfo: '500 employees, serving APAC markets primarily.',
    },
    manufacturing: {
      capabilities: 'High-volume synthesis, plastics molding.',
      capacities: 'Up to 1,000L reactors, 300+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['China (HQ)', 'Japan', 'Singapore'],
      infrastructure: '4 production facilities, 1 logistics hub.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'PMDA certified'],
      qualitySystems: 'Batch tracking, statistical process control.',
      auditHistory: 'Last audit: Q2 2024, compliance confirmed.',
      certifications: ['ISO 14001'],
    },
    pricing: {
      structures: 'Variable pricing based on market rates, contract options.',
      paymentTerms: 'Net 30 days, adjustable for volume.',
      financialStability: 'BBB+ rating, moderate debt levels.',
      negotiationLevers: 'Bulk order discounts, flexible terms.',
      costTransparency: 'Monthly pricing updates shared.',
    },
  },
  {
    id: 5,
    name: 'Nordic Biotech',
    region: 'Northern Europe',
    contract: {
      length: '2-year contract',
      expiry: format(addDays(new Date('2025-04-09'), 300), 'MMM dd, yyyy'),
      terms: 'Net 60, Tiered pricing',
      exclusivity: 'Exclusive for specific regions',
      qualityMetrics: '99.5% acceptance rate required',
    },
    capacity: '100+ batch runs annually',
    compliance: ['ISO 9001', 'GMP', 'Nordic Swan Ecolabel'],
    riskRating: 'Low',
    geopolitical: {
      region: 'Very stable',
      tradeAgreements: ['EU', 'EEA'],
      politicalStability: 'Very High',
      logisticsRisk: 'Low',
    },
    financial: {
      rating: 'AA-',
      marketCap: '$1.2B',
      revenue: '$250M annually',
    },
    esg: {
      environmentalScore: 95,
      socialScore: 92,
      governanceScore: 94,
      certifications: ['ISO 14001', 'B Corp'],
    },
    alternateProducts: ['Enzyme Products', 'Diagnostic Reagents', 'Research Antibodies'],
    riskAlerts: [
      'Implementing new quality management system',
      'R&D collaboration with universities ongoing',
    ],
    profile: {
      background: 'Founded in 1985, Nordic Biotech leads in sustainable biotech solutions.',
      generalInfo: '300 employees, strong focus on R&D and diagnostics.',
    },
    manufacturing: {
      capabilities: 'Enzyme production, diagnostic reagent synthesis.',
      capacities: 'Up to 200L bioreactors, 100+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['Sweden (HQ)', 'Denmark', 'Norway'],
      infrastructure: '1 manufacturing plant, 1 R&D lab.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'Nordic Swan Ecolabel'],
      qualitySystems: 'Continuous improvement, ISO 13485 processes.',
      auditHistory: 'Last audit: Q4 2023, exemplary results.',
      certifications: ['ISO 14001', 'B Corp'],
    },
    pricing: {
      structures: 'Tiered pricing based on order size, exclusive contracts.',
      paymentTerms: 'Net 60 days, incentives for sustainability goals.',
      financialStability: 'AA- rating, robust financial health.',
      negotiationLevers: 'Exclusivity agreements, R&D partnerships.',
      costTransparency: 'Full transparency with tiered pricing details.',
    },
  },
  {
    id: 6,
    name: 'LatAm Pharmaceuticals',
    region: 'South America',
    contract: {
      length: '18-month contract',
      expiry: format(addDays(new Date('2025-04-09'), 240), 'MMM dd, yyyy'),
      terms: 'Net 45, Volume-based pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '96% acceptance rate required',
    },
    capacity: '150+ batch runs annually',
    compliance: ['ISO 9001', 'GMP', 'ANVISA certified'],
    riskRating: 'Medium',
    geopolitical: {
      region: 'Moderate stability',
      tradeAgreements: ['Mercosur'],
      politicalStability: 'Medium',
      logisticsRisk: 'Medium',
    },
    financial: {
      rating: 'BBB',
      marketCap: '$600M',
      revenue: '$150M annually',
    },
    esg: {
      environmentalScore: 80,
      socialScore: 85,
      governanceScore: 78,
      certifications: ['ISO 14001', 'Local sustainability certifications'],
    },
    alternateProducts: ['Generic APIs', 'Basic Chemicals', 'Laboratory Supplies'],
    riskAlerts: [
      'Currency fluctuation affecting pricing',
      'New quality control procedures being implemented',
    ],
    profile: {
      background: 'Launched in 2005, LatAm Pharmaceuticals serves regional markets.',
      generalInfo: '400 employees, specializing in generic APIs and chemicals.',
    },
    manufacturing: {
      capabilities: 'API synthesis, aseptic filling.',
      capacities: 'Up to 400L reactors, 150+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['Brazil (HQ)', 'Argentina', 'Chile'],
      infrastructure: '2 production sites, 1 distribution center.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'ANVISA certified'],
      qualitySystems: 'HACCP, quality by design.',
      auditHistory: 'Last audit: Q1 2024, minor corrective actions.',
      certifications: ['ISO 14001', 'Local sustainability certifications'],
    },
    pricing: {
      structures: 'Volume-based pricing, spot pricing for small batches.',
      paymentTerms: 'Net 45 days, currency hedging available.',
      financialStability: 'BBB rating, steady revenue.',
      negotiationLevers: 'Regional exclusivity, bulk pricing.',
      costTransparency: 'Quarterly cost reviews provided.',
    },
  },
  {
    id: 7,
    name: 'Asymchem (China)',
    region: 'Asia Pacific',
    contract: {
      length: '2-year contract',
      expiry: format(addDays(new Date('2025-04-09'), 365), 'MMM dd, yyyy'),
      terms: 'Net 30, Variable pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '98% acceptance rate required',
    },
    capacity: '250+ batch runs annually',
    compliance: ['ISO 9001', 'GMP', 'CFDA certified'],
    riskRating: 'High',
    geopolitical: {
      region: 'Moderate stability',
      tradeAgreements: ['RCEP'],
      politicalStability: 'Medium',
      logisticsRisk: 'High',
      additionalRisk: 'New Trump Tariffs',
    },
    financial: {
      rating: 'A-',
      marketCap: '$1.5B',
      revenue: '$300M annually',
    },
    esg: {
      environmentalScore: 78,
      socialScore: 82,
      governanceScore: 85,
      certifications: ['ISO 14001'],
    },
    alternateProducts: ['APIs', 'Intermediates', 'Specialty Chemicals'],
    riskAlerts: [
      'New Trump Tariffs increasing costs starting Q2 2025',
      'Port delays in Tianjin affecting shipments',
    ],
    profile: {
      background: 'Founded in 1998, Asymchem specializes in API and intermediate production.',
      generalInfo: '900 employees, known for custom synthesis and process development.',
    },
    manufacturing: {
      capabilities: 'Custom synthesis, high-potency API production.',
      capacities: 'Up to 600L reactors, 250+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['China (HQ)', 'USA (sales office)'],
      infrastructure: '3 manufacturing plants, 1 R&D center.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'CFDA certified'],
      qualitySystems: 'Real-time process monitoring, GMP audits.',
      auditHistory: 'Last audit: Q3 2024, full compliance.',
      certifications: ['ISO 14001'],
    },
    pricing: {
      structures: 'Variable pricing due to tariff impacts, contract options.',
      paymentTerms: 'Net 30 days, adjustments for tariff costs.',
      financialStability: 'A- rating, solid cash reserves.',
      negotiationLevers: 'Volume commitments, tariff mitigation strategies.',
      costTransparency: 'Monthly tariff impact reports provided.',
    },
  },
  {
    id: 8,
    name: 'WuXi AppTec (China)',
    region: 'Asia Pacific',
    contract: {
      length: '3-year contract',
      expiry: format(addDays(new Date('2025-04-09'), 730), 'MMM dd, yyyy'),
      terms: 'Net 45, Tiered pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '97% acceptance rate required',
    },
    capacity: '400+ batch runs annually',
    compliance: ['ISO 9001', 'GMP', 'FDA certified'],
    riskRating: 'High',
    geopolitical: {
      region: 'Moderate stability',
      tradeAgreements: ['RCEP'],
      politicalStability: 'Medium',
      logisticsRisk: 'High',
      additionalRisk: 'New Trump Tariffs',
    },
    financial: {
      rating: 'A',
      marketCap: '$3.2B',
      revenue: '$700M annually',
    },
    esg: {
      environmentalScore: 80,
      socialScore: 83,
      governanceScore: 87,
      certifications: ['ISO 14001', 'Green Chemistry Award'],
    },
    alternateProducts: ['Biologics', 'Small Molecules', 'Analytical Services'],
    riskAlerts: [
      'New Trump Tariffs impacting export costs starting Q2 2025',
      'Expansion of biologics facility planned for 2025',
    ],
    profile: {
      background: 'Established in 2000, WuXi AppTec is a global leader in contract research and manufacturing.',
      generalInfo: '2,500 employees, extensive biologics and small molecule expertise.',
    },
    manufacturing: {
      capabilities: 'Biologics production, small molecule synthesis, analytical testing.',
      capacities: 'Up to 1,200L bioreactors, 400+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['China (HQ)', 'USA', 'Germany'],
      infrastructure: '5 manufacturing sites, 2 R&D centers.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'FDA certified'],
      qualitySystems: 'Advanced analytics, continuous quality improvement.',
      auditHistory: 'Last audit: Q2 2024, no major issues.',
      certifications: ['ISO 14001', 'Green Chemistry Award'],
    },
    pricing: {
      structures: 'Tiered pricing with tariff adjustments, spot pricing available.',
      paymentTerms: 'Net 45 days, flexible for long-term partners.',
      financialStability: 'A rating, strong revenue growth.',
      negotiationLevers: 'Long-term contracts, diversified services.',
      costTransparency: 'Quarterly financial impact reports shared.',
    },
  },
  
];

// Alerts data (optional, used in HomePage)
export const alerts = [
  { id: 1, type: 'contract', message: 'Supplier A contract expires in 30 days', severity: 'high' },
  { id: 2, type: 'risk', message: 'New trade restrictions in Region B', severity: 'medium' },
  { id: 3, type: 'supply', message: 'Material X stock below threshold', severity: 'low' },
];