import React from "react";
import Contact from "../../pages/Contact";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Contact Us | MWAI Architects & Roof Engineering",
  description: "Get in touch with MWAI Architects in Winter Park, FL. Schedule a design consultation or request professional roof inspections and storm-wind mitigation reports.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/contact" />
      <Contact />
    </>
  );
}
