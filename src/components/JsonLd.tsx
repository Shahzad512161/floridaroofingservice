import React from "react";

interface JsonLdProps {
  type?: "Architect" | "RoofingContractor" | "LocalBusiness" | "WebSite";
  title?: string;
  description?: string;
  path?: string;
}

export default function JsonLd({ type = "Architect", title, description, path }: JsonLdProps) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "MWAI Architects",
    "description": description || "Professional architecture and premium roofing services in Winter Park, Orlando, and across Florida.",
    "url": `https://mwaiarchitects.com${path || ""}`,
    "telephone": "+17026029336",
    "email": "info@mwaiarchitects.com",
    "logo": "https://mwaiarchitects.com/logo.png",
    "image": "https://mwaiarchitects.com/images/hero-bg.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "U K Cir",
      "addressLocality": "Winter Park",
      "addressRegion": "FL",
      "postalCode": "32792",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5912",
      "longitude": "-81.3075"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  const breadcrumbSchema = path ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mwaiarchitects.com"
      },
      ...path.split("/").filter(Boolean).map((part, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1).replace("-", " "),
        "item": `https://mwaiarchitects.com/${path.split("/").filter(Boolean).slice(0, index + 1).join("/")}`
      }))
    ]
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
