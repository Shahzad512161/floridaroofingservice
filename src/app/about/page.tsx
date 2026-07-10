import React from "react";
import About from "../../pages/About";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "About Us | MWAI Architects & Roof Engineering",
  description: "Learn about MWAI Architects, our dual state certifications in architecture and roofing, and our commitment to wind-resilient structures in Florida.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/about" />
      <About />
    </>
  );
}
