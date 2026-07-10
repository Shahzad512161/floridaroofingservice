export interface CityInfo {
  name: string;
  region: "Central" | "South" | "North" | "Gulf Coast" | "Keys";
  county: string;
  highlights: string[];
  description: string;
}

export const CITIES: CityInfo[] = [
  {
    name: "Winter Park",
    region: "Central",
    county: "Orange",
    highlights: ["Historic estates", "Tile roofing specialties", "Stringent architectural guidelines"],
    description: "Our core service location. Winter Park is known for its tree-lined streets, historic estates, and prestigious residential architecture. We specialize in clay tile and slate roofing installations that harmonize with the city's historic charm and strict building regulations."
  },
  {
    name: "Orlando",
    region: "Central",
    county: "Orange",
    highlights: ["Modern commercial roofing", "Mixed-use urban planning", "Storm damage restoration"],
    description: "The heart of Central Florida, Orlando features a dynamic mix of mid-century suburbs, ultra-modern commercial offices, and expansive residential developments. We offer full-scale architectural design and advanced roofing solutions engineered for heat reflection and heavy seasonal rain."
  },
  {
    name: "Miami",
    region: "South",
    county: "Miami-Dade",
    highlights: ["Modern luxury design", "Standing seam metal roofing", "High-velocity hurricane zones"],
    description: "With its iconic skyline and beachfront estates, Miami demands world-class modern architecture and high-velocity wind resistant roofing. We design sleek contemporary coastal estates and install hurricane-rated standing seam metal and tile systems."
  },
  {
    name: "Tampa",
    region: "Gulf Coast",
    county: "Hillsborough",
    highlights: ["Bungalow restorations", "Commercial low-slope TPO", "Salt-air resilient materials"],
    description: "Tampa boasts a rich architectural heritage, from historic Ybor City brick buildings to modern waterfront high-rises. Our services address the harsh gulf-coast salt air and high humidity, delivering sustainable architectural designs and ultra-durable roofing assemblies."
  },
  {
    name: "Jacksonville",
    region: "North",
    county: "Duval",
    highlights: ["Coastal estate designs", "Large-scale commercial roofs", "Vast residential shingle upgrades"],
    description: "Florida's largest city by area, Jacksonville spans riverfront properties, suburban family communities, and commercial districts. We provide tailored architectural drafting, new home designs, and comprehensive roof replacement and inspection services."
  },
  {
    name: "Fort Lauderdale",
    region: "South",
    county: "Broward",
    highlights: ["Waterfront engineering", "Tile and metal options", "Coastal high-wind resilience"],
    description: "Known as the Venice of America, Fort Lauderdale's waterfront canal homes require specialized marine-environment architecture and roofing. Our designs maximize coastal views while utilizing materials that resist salt corrosion and structural weathering."
  },
  {
    name: "West Palm Beach",
    region: "South",
    county: "Palm Beach",
    highlights: ["Mediterranean architecture", "Natural slate roofs", "Luxury residential planning"],
    description: "An elegant coastal enclave with a high density of Spanish and Mediterranean architecture. We specialize in high-end structural planning, clay tile restoration, and premium natural slate installs matching the elegant palm beach aesthetic."
  },
  {
    name: "Naples",
    region: "Gulf Coast",
    county: "Collier",
    highlights: ["Luxury estate planning", "Custom concrete tiles", "Premium building envelopes"],
    description: "Boasting some of Florida's finest luxury estates, Naples requires high-end architectural vision and meticulous craftsmanship. We offer architectural design, energy-efficient roofing installations, and high-performance concrete tile roofs for local estates."
  },
  {
    name: "Sarasota",
    region: "Gulf Coast",
    county: "Sarasota",
    highlights: ["Sarasota School of Architecture styling", "Flat roofs & TPO", "Mid-century modern renovations"],
    description: "Famous for its unique school of mid-century modern architecture, Sarasota demands a keen design eye. We specialize in modernist home designs, low-slope membrane solutions, and custom roof conversions that accentuate clean structural lines."
  },
  {
    name: "St. Petersburg",
    region: "Gulf Coast",
    county: "Pinellas",
    highlights: ["Historic craft renovations", "Solar-ready metal roofs", "Waterfront weatherproofing"],
    description: "St. Petersburg merges charming historic bungalow communities with a modern urban downtown. Our architectural and roofing services are geared towards preservation, structural reinforcement, and solar-ready roofing installations."
  },
  {
    name: "Tallahassee",
    region: "North",
    county: "Leon",
    highlights: ["Classic Southern architecture", "Deep overhang roof planning", "Shingle & slate selections"],
    description: "As Florida's capital, Tallahassee features a canopy-covered rolling terrain and traditional architecture. We specialize in architectural consulting, classic residential designs, and roofing systems that handle heavy leaf debris and humid climates."
  },
  {
    name: "Gainesville",
    region: "North",
    county: "Alachua",
    highlights: ["Eco-friendly architectures", "Shingle and metal setups", "Sustainable building practices"],
    description: "A vibrant university city with an emphasis on sustainability and historic preservation. Our architectural practice incorporates green building techniques, while our roofing division specializes in energy-efficient standing seam metal systems."
  },
  {
    name: "Daytona Beach",
    region: "Central",
    county: "Volusia",
    highlights: ["Coastal high-wind shingles", "Salt-spray metal protection", "Storm damage analysis"],
    description: "Subject to direct Atlantic coast storms and heavy salt-spray. We design coastal buildings and install heavy-duty, wind-rated asphalt shingle and metal roofing systems designed to withstand continuous marine exposure."
  },
  {
    name: "Melbourne",
    region: "Central",
    county: "Brevard",
    highlights: ["Space-coast coastal designs", "Tile & metal conversions", "FHA/FBC compliance"],
    description: "Melbourne's Space Coast location demands structures that handle heat, humidity, and coastal weather events. We offer architectural drafting, structural permits, and premium residential roof installations."
  },
  {
    name: "Pensacola",
    region: "North",
    county: "Escambia",
    highlights: ["Creole & historic architectures", "Metal panel roof systems", "Hurricane-rated engineering"],
    description: "With its deep historic Spanish and French influences, Pensacola possesses a unique architectural layout. Our services respect historic guidelines while integrating heavy wind-load roof engineering."
  },
  {
    name: "Key West",
    region: "Keys",
    county: "Monroe",
    highlights: ["Conch architecture styling", "Galvalume metal roofing", "Strict historic preservation rules"],
    description: "An island paradise requiring strict adherence to Key West Historic District rules. We specialize in historic 'Conch' style architectural consulting and classic, salt-resistant Galvalume metal roofing."
  },
  {
    name: "Clearwater",
    region: "Gulf Coast",
    county: "Pinellas",
    highlights: ["Waterfront condo roof design", "Tile & concrete solutions", "Moisture barrier specialists"],
    description: "Clearwater features beautiful coastal residences and high-density buildings. We engineer robust multi-layered moisture barriers, clay tile roofings, and state-of-the-art building envelopes that keep ocean moisture out."
  },
  {
    name: "Coral Springs",
    region: "South",
    county: "Broward",
    highlights: ["Strict community masterplans", "Concrete tile roofing", "Suburban spatial layouts"],
    description: "A master-planned city known for its strict aesthetic guidelines. We design custom home additions and commercial structures, and install matching concrete tile and dimensional asphalt roof systems."
  },
  {
    name: "Hollywood",
    region: "South",
    county: "Broward",
    highlights: ["Art Deco restoration", "Modern roof replacement", "Flat roof systems"],
    description: "Situated between Miami and Fort Lauderdale, Hollywood features beautiful classic Art Deco and modern designs. We provide architectural planning and install premium TPO and tile roofing assemblies."
  },
  {
    name: "Palm Bay",
    region: "Central",
    county: "Brevard",
    highlights: ["Acreage property designs", "Reliable shingle systems", "Affordable premium roofs"],
    description: "A sprawling Central Florida city with massive residential suburbs. We offer functional custom home additions, structural drafting, and cost-effective, storm-resistant dimensional shingle installations."
  },
  {
    name: "Port St. Lucie",
    region: "South",
    county: "St. Lucie",
    highlights: ["New construction designs", "Premium tile and shingle options", "Wind mitigation certifications"],
    description: "One of the fastest-growing cities in Florida, Port St. Lucie features modern, energy-efficient housing developments. We provide custom home architecture, structural plans, and premium tile and shingle installations."
  }
];
