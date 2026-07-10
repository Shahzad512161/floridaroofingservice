import React from "react";
import Home from "../pages/Home";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "MWAI Architects & Roof Engineering | Florida's Premier Architectural & Roofing Firm",
  description: "Licensed Florida architecture (AR92810) and roofing contractor (CCC38291). We design and install wind-resilient structures in Winter Park, Orlando, and statewide.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/" />
      <Home />
    </>
  );
}
