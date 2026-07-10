import React from "react";
import Roofing from "../../pages/Roofing";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Professional Roofing Services & Specifications | MWAI Architects",
  description: "Licensed Florida roofing contractor (CCC38291). High-performance wind-resistant roofing installations, emergency repairs, replacements, and structural inspections.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/roofing" />
      <Roofing />
    </>
  );
}
