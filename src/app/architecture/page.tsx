import React from "react";
import Architecture from "../../pages/Architecture";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Architectural Planning & Design Services | MWAI Architects",
  description: "Specialized in luxury residential estates, custom commercial spaces, and comprehensive interior design specifications tailored for wind-load mitigation in Florida.",
};

export default function Page() {
  return (
    <>
      <JsonLd path="/architecture" />
      <Architecture />
    </>
  );
}
