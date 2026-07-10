import React from "react";
import ServiceAreas from "../../pages/ServiceAreas";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Florida Service Areas | MWAI Architects & Roof Engineering",
  description: "Licensed architectural design and professional roofing services across 21 Florida municipal districts including Winter Park, Orlando, Miami, Tampa, and coastal regions.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/service-areas" />
      <ServiceAreas />
    </>
  );
}
