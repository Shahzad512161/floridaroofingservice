import React from "react";
import Projects from "../../pages/Projects";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Our Architectural & Roofing Portfolio | MWAI Projects",
  description: "Browse our portfolio of custom luxury homes, modern commercial designs, historic restorations, and wind-resilient roofing installations completed across Florida.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/projects" />
      <Projects />
    </>
  );
}
