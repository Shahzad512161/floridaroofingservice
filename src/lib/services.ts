export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: string[];
  iconName: string;
  imageUrl: string;
  subType?: string;
}

export interface RoofingType {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  advantages: string[];
  materialsUsed: string[];
  bestFor: string;
  iconName: string;
  imageUrl: string;
}

export const ARCHITECTURE_SERVICES: ServiceDetail[] = [
  {
    id: "residential",
    title: "Residential Architecture",
    shortDescription: "Custom luxury homes, estates, and high-end residential renovations tailored to Florida living.",
    fullDescription: "Our residential architectural design team crafts homes that are visually stunning, structural resilient, and meticulously customized for your lifestyle. We design modern coastal villas, historic estates, and custom residential renovations that blend indoor and outdoor living while standing strong against the Florida climate.",
    features: [
      "Custom Estate & Single-Family Home Design",
      "Sustainable & Energy-Efficient Home Layouts",
      "Structural Engineering & Coastal Resiliency Integration",
      "Detailed Layout Optimization & Spatial Planning",
      "Permitting & Florida Building Code Compliance Verification",
      "Site Analysis & Solar Orientation Planning"
    ],
    process: [
      "Initial Consultation & Spatial Needs Assessment",
      "Schematic Design & Space-Flow Exploration",
      "Design Development & Detailed Architectural Layouts",
      "Permit Drawings & Engineering Coordination",
      "Construction Oversight & Architect Liaison Services"
    ],
    iconName: "Home",
    imageUrl: "/src/assets/images/hero_architecture_banner_1783704942154.jpg"
  },
  {
    id: "commercial",
    title: "Commercial Architecture",
    shortDescription: "Sleek, highly functional retail spaces, corporate offices, and institutional planning.",
    fullDescription: "MWAI Architects delivers commercial spaces designed to maximize workspace efficiency, foster customer engagement, and build lasting corporate presence. From high-end retail venues and medical suites to expansive multi-tenant office complexes, our solutions integrate functionality with state-of-the-art building science.",
    features: [
      "Retail, Corporate Office, & Medical Clinic Design",
      "ADA Compliance & Universal Design Standards",
      "Urban Site Planning & Mixed-Use Spatial Integration",
      "HVAC & Building Mechanical Coordination Planning",
      "Zoning Analysis & Complete Municipality Approvals",
      "Structural Integrity Planning for High-Wind Environments"
    ],
    process: [
      "Feasibility Study & Commercial Zoning Assessment",
      "High-Level Master Planning & Building Massing Models",
      "Detailed Spatial Planning & Construction Documentation",
      "Zoning Approvals & Code Compliance Filing",
      "Construction Administration & Regular Progress Inspections"
    ],
    iconName: "Building2",
    imageUrl: "/src/assets/images/flat_tpo_roof_1783707454621.jpg"
  },
  {
    id: "interior-design",
    title: "Interior Design Services",
    shortDescription: "Sophisticated spatial aesthetics, premium material selections, and custom cabinetry planning.",
    fullDescription: "True design flows seamlessly from the structural shell into the tactile elements of the interior. Our interior design services marry architectural volume with luxury finishes, bespoke millwork, and balanced lighting schemes to elevate the spatial experience of both residential and commercial projects.",
    features: [
      "Bespoke Millwork, Cabinetry, & Built-In Detailing",
      "High-End Material, Finish, & Surface Specifications",
      "Architectural Lighting Plans & Fixture Selections",
      "Acoustic & Thermal Material Integrations",
      "Color Consultations & Finish Scheduling",
      "Custom Spatial Layout & Furniture Coordination"
    ],
    process: [
      "Aesthetic Profiling & Material Board Formulation",
      "Interior Spatial Drafts & Elevation Renderings",
      "Finish Specifying & Comprehensive Schedules Listing",
      "Installation Quality Monitoring & Finishes Coordination"
    ],
    iconName: "Sparkles",
    imageUrl: "/src/assets/images/hero_architecture_banner_1783704942154.jpg"
  }
];

export const ROOFING_SERVICES: ServiceDetail[] = [
  {
    id: "installation",
    title: "New Roof Installation",
    shortDescription: "State-of-the-art roof design, planning, and engineered installations for new builds.",
    fullDescription: "As an architecture-led roofing contractor, our new roof installations are engineered from the foundation up. We integrate roof trusses, ventilation systems, flashing, and premium underlayments to deliver high-performance weather barriers that protect your property and enhance building thermal efficiency.",
    features: [
      "Engineered Structural Load Analysis & Support Checks",
      "High-Performance Ice and Water Underlayment Installation",
      "Advanced Roof Ventilation & Ridge Vent System Calculations",
      "Heavy-Duty Metal Counter-Flashing & Valley Interlocking",
      "Seamless Integration with Building Envelope Systems",
      "Florida Building Code Compliance & Wind-Load Certification"
    ],
    process: [
      "Architectural Drawing Review & Truss Loading Assessment",
      "Underlayment Selection & Moisture-Barrier Blueprinting",
      "Precision Fastening & Material Installation Phase",
      "Ridge Ventilation and Soffit Integration Verification",
      "Final Code Inspection & Independent Seal Certification"
    ],
    iconName: "Layers",
    imageUrl: "/src/assets/images/asphalt_shingles_roof_1783707403984.jpg"
  },
  {
    id: "repair",
    title: "Roof Leak Detection & Repair",
    shortDescription: "Precision non-invasive leak location and robust structural repair of roof assemblies.",
    fullDescription: "Roof leaks are critical structural hazards that require scientific detection, not guesswork. Our expert team utilizes moisture scanning, thermal analysis, and physical inspections to trace leaks back to their source, performing targeted repairs that restore water-tight integrity to your property.",
    features: [
      "Infrared Thermal Leak Detection & Water-Trace Mapping",
      "Damaged Underlayment Extraction & Structural Timber Repair",
      "Flashing Retrofitting around Chimneys, Vents, & Valleys",
      "Wind-Damaged Shingle, Metal, or Tile Piece Replacement",
      "Premium Structural Polyurethane Joint Re-Sealing",
      "Storm Damage Integrity Recovery Actions"
    ],
    process: [
      "Moisture Profiling & Structural Integrity Scanning",
      "Source Identification & Clear Rectification Plan Proposal",
      "Deteriorated Material Extraction & Timber Preservation",
      "Moisture-Seal Underlayment Restructuring",
      "Outer Shingle/Tile Interlocking & Final Water-Seal Testing"
    ],
    iconName: "Wrench",
    imageUrl: "/src/assets/images/hero_roofing_banner_1783704958991.jpg"
  },
  {
    id: "replacement",
    title: "Complete Roof Replacement",
    shortDescription: "Tear-off, structural wood repair, and brand-new system installation for aging roofs.",
    fullDescription: "When a roofing system reaches the end of its design life, a complete replacement is the safest way to protect your building's structural integrity. We perform complete tear-offs down to the roof deck, inspect and re-fasten sheathing to meet modern hurricane wind standards, and install a brand-new multi-layer barrier.",
    features: [
      "Complete Outer Material & Sub-Layer Tear-Off down to Wood",
      "Roof Deck Plywood Inspection & Code-Compliant Re-Nailing",
      "Self-Adhered Secondary Water Barrier Installation",
      "Premium Drip Edge & Aluminum Flashing Replacements",
      "Installation of Chosen Premium Surface Material",
      "Old Material Disposal & Environmentally Conscious Recycling"
    ],
    process: [
      "Meticulous Material Prep & Property Safeguarding Setup",
      "Rapid Outer Layer Tear-Off & Substrate Inspection",
      "Roof Deck Renail & Hurricane Straps Securing check",
      "Secondary Water Barrier (Peel-and-Stick) Laydown",
      "Primary Material Fastening & Quality Flashing Setup",
      "Comprehensive Ground Cleanup & Site Clearing"
    ],
    iconName: "Shield",
    imageUrl: "/src/assets/images/clay_tile_roof_1783707420890.jpg"
  },
  {
    id: "inspection",
    title: "Architectural Roof Inspection",
    shortDescription: "Detailed engineering and building envelope condition analysis for home purchases or insurance.",
    fullDescription: "A standard visual inspection is often not enough for high-value properties, insurance requirements, or storm-damage claims. Our architectural roof inspections assess deck securement, underlayment degradation, ventilation efficiency, flashing conditions, and structural deflection to deliver a rigorous report.",
    features: [
      "Structural Truss Alignment & Timber Deflection Auditing",
      "Fascia, Soffit, & Wood Eaves Decay Assessments",
      "Flashing Lifecycle & Solder Joint Soundness Checks",
      "Deck Fastener Pattern and Rust Penetration Inspections",
      "Ventilation Inflow and Outflow Balanced Ratio Audits",
      "Digital Architectural Condition Log & Photo Log Delivery"
    ],
    process: [
      "Exterior Perimeter & Under-Eaves Structural Scan",
      "Roof Surface Layer Physical & Flashing Detail Auditing",
      "Attic Inter-Structure Water Intrusion Inspection",
      "Data Evaluation & Formal Architect-Signed Report Generation"
    ],
    iconName: "Clipboard",
    imageUrl: "/src/assets/images/hero_roofing_banner_1783704958991.jpg"
  }
];

export const ROOFING_TYPES: RoofingType[] = [
  {
    id: "shingle",
    title: "Asphalt Shingle Roofing",
    shortDescription: "Versatile, cost-efficient, and highly weather-resistant dimensional architectural shingles.",
    fullDescription: "Dimensional fiberglass-asphalt shingles are a staple of modern architectural design, offering excellent wind resistance and a classic aesthetic. We utilize heavy-grade architectural shingles with specialized sealants that withstand severe storms and high humidity.",
    advantages: [
      "High Cost-Efficiency & Value Retention",
      "Excellent Impact & Class-A Fire Resistance",
      "Available in Slate-Look & Shake-Look Profiles",
      "Equipped with Algae-Resistant Copper Granules",
      "Simple, Efficient Maintenance and Localized Repairs"
    ],
    materialsUsed: [
      "Fiberglass-Reinforced Asphalt Base",
      "Ceramic-Coated Quartz Mineral Granules",
      "Peel-and-Stick SBS Modified Asphalt Underlayment"
    ],
    bestFor: "Residential properties seeking versatile, cost-effective, storm-resilient aesthetic options.",
    iconName: "Grid",
    imageUrl: "/src/assets/images/asphalt_shingles_roof_1783707403984.jpg"
  },
  {
    id: "tile",
    title: "Clay & Concrete Tile Roofing",
    shortDescription: "Distinctive, extremely long-lasting clay and concrete tiles fitting Spanish and Mediterranean designs.",
    fullDescription: "Tile roofing is an iconic architectural element of Florida's premium properties. Providing natural air circulation, tile roofs offer exceptional resistance to high winds, mold, and fire, outlasting standard materials by decades when paired with expert installation.",
    advantages: [
      "Unmatched 75+ Year Lifespan Potential",
      "Exceptional High-Wind (Up to 150MPH) Resiliency",
      "Natural Under-Tile Air Pocket Thermal Insulation",
      "Skins Resistant to Salt-Air and UV Degradation",
      "Stunning Barrel, Flat, or S-Curve Visual Styles"
    ],
    materialsUsed: [
      "Kiln-Fired Natural Terra Cotta Clay",
      "Reinforced High-Density Colored Portland Cement",
      "Double-Layer Heavyweight Self-Adhering Underlayment"
    ],
    bestFor: "Luxury Mediterranean, Spanish Revival, or high-wind coastal residential architecture.",
    iconName: "Home",
    imageUrl: "/src/assets/images/clay_tile_roof_1783707420890.jpg"
  },
  {
    id: "metal",
    title: "Standing Seam Metal Roofing",
    shortDescription: "Sleek architectural profiles, low maintenance, and outstanding storm survival rates.",
    fullDescription: "Metal roofing is the gold standard for contemporary architectural design. Standing seam metal roof systems feature concealed fasteners and interlocking ribs, forming an impenetrable barrier against wind and rain while reflecting solar radiation.",
    advantages: [
      "Concealed Fasteners Prevent Water Entry Points",
      "High Heat Reflectivity (Cool Roof Rating) Reduces HVAC Load",
      "Highly Resilient to Heavy Winds, Impact, and Fires",
      "Sleek Minimalist Design Fitting Modern Residences",
      "Constructed with 100% Recyclable and Sustainable Metals"
    ],
    materialsUsed: [
      "Galvalume Coated Steel (24-Gauge)",
      "Kynar 500 PVDF Architectural Paint Systems",
      "Butyl In-Seam Sealants and Structural Anchoring Clips"
    ],
    bestFor: "Modern architectural designs, coastal homes, and structures requiring maximum storm-wind resilience.",
    iconName: "Layers",
    imageUrl: "/src/assets/images/standing_seam_metal_roof_1783707435847.jpg"
  },
  {
    id: "flat",
    title: "Engineered Flat Roofing",
    shortDescription: "Premium multi-ply modified bitumen and single-ply membranes for modern residential and commercial properties.",
    fullDescription: "Flat and low-slope roofs require architectural expertise to ensure perfect drainage and moisture barrier integrity. We utilize advanced single-ply TPO/EPDM membranes and multi-layer modified bitumen systems designed for Florida's high temperatures and rainfall.",
    advantages: [
      "TPO White Heat-Reflective Technology Lowers cooling costs",
      "Double-Reinforced Seams Weld-Fused with Hot Air",
      "Highly Resistant to Water Ponding and UV Degradation",
      "Maximizes Rooftop Usable Space for HVAC or Decks",
      "Excellent Puncture Resistance and Structural Flexibility"
    ],
    materialsUsed: [
      "Thermoplastic Polyolefin (TPO) Membranes",
      "SBS-Modified Bitumen Multi-Ply Assemblies",
      "Polyisocyanurate (Polyiso) Rigid Foam Insulation Boards"
    ],
    bestFor: "Ultra-modern flat-roof homes, commercial complexes, and low-slope roof portions.",
    iconName: "Square",
    imageUrl: "/src/assets/images/flat_tpo_roof_1783707454621.jpg"
  },
  {
    id: "slate",
    title: "Premium Natural Slate Roofing",
    shortDescription: "The ultimate luxury roofing material with natural cleft, elegant texture, and generations of durability.",
    fullDescription: "Natural slate represents the pinnacle of architectural prestige and permanence. Hand-quarried from dense metamorphic rock, slate tile roofs offer an unmatched organic aesthetic, total fireproof safety, and can easily endure for over a century.",
    advantages: [
      "Indestructible Natural Material Lasting Over 100 Years",
      "Incredible Organic Texture and Regal Color Variations",
      "Completely Fireproof, Rotproof, and Mold-Resistant",
      "Extremely High Weight Increases Wind Uplift Resistance",
      "Maintains Permanent Color and Elegance Forever"
    ],
    materialsUsed: [
      "Authentic Hand-Split Metamorphic Slate Tiles",
      "Heavy-Gauge Solid Copper Slating Nails",
      "Thick High-Durability Engineered Asphalt Felt Sub-layers"
    ],
    bestFor: "High-end luxury estates, traditional European layouts, and generational heritage homes.",
    iconName: "Sliders",
    imageUrl: "/src/assets/images/natural_slate_roof_1783707472429.jpg"
  },
  {
    id: "wood-shake",
    title: "Traditional Wood Shake Roofing",
    shortDescription: "Organic cedar shakes offering excellent rustic character and natural thermal insulating benefits.",
    fullDescription: "Wood shake roofing offers a deeply textured, rustic charm that blends seamlessly into natural landscapes. Our high-grade cedar shakes are treated with advanced rot-preventative and fire-retardant treatments to provide exceptional durability while meeting stringent modern safety rules.",
    advantages: [
      "Rich Organic Shadow Lines and Soft Silver-Gray Aging",
      "Natural Wood Fibers Offer Superior Structural Insulation",
      "Highly Resistant to Freeze-Thaw and Severe Winds",
      "Environmentally Sustainable Organic Timber Sourcing",
      "Provides Unique Character and Historic Styling"
    ],
    materialsUsed: [
      "Premium Fire-Retardant Treated Western Red Cedar",
      "Stainless Steel Ring-Shank Fasteners",
      "Breathable Vapor-Permeable Synthetic Underlayments"
    ],
    bestFor: "Rustic high-end craftsman style homes, traditional Florida ranches, and historic restorations.",
    iconName: "Tree",
    imageUrl: "/src/assets/images/cedar_wood_shake_roof_1783707490114.jpg"
  }
];
