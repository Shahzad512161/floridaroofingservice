import React from "react";
import RoofingSub from "../../../pages/RoofingSub";
import RoofingTypeSub from "../../../pages/RoofingTypeSub";
import { ROOFING_SERVICES, ROOFING_TYPES } from "../../../lib/services";
import JsonLd from "../../../components/JsonLd";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const isService = ROOFING_SERVICES.some(srv => srv.id === id);
  const isType = ROOFING_TYPES.some(t => t.id === id);

  return (
    <>
      <JsonLd path={`/roofing/${id}`} />
      {isService ? (
        <RoofingSub id={id as "installation" | "repair" | "replacement" | "inspection"} />
      ) : isType ? (
        <RoofingTypeSub id={id as "shingle" | "tile" | "metal" | "flat" | "slate" | "wood-shake"} />
      ) : (
        <div className="py-24 text-center">
          <h2 className="text-xl font-bold">Roofing Specification Route Not Found</h2>
        </div>
      )}
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const service = ROOFING_SERVICES.find((srv) => srv.id === id);
  if (service) {
    return {
      title: `${service.title} | MWAI Roof Engineering`,
      description: service.shortDescription,
    };
  }

  const type = ROOFING_TYPES.find((t) => t.id === id);
  if (type) {
    return {
      title: `${type.title} Roofing | MWAI Roof Engineering`,
      description: type.shortDescription,
    };
  }

  return {
    title: "Roofing Specification | MWAI Roof Engineering",
    description: "Premium architectural roofing systems and engineering for Florida's wind climates.",
  };
}

export async function generateStaticParams() {
  const serviceParams = ROOFING_SERVICES.map((srv) => ({
    id: srv.id,
  }));
  const typeParams = ROOFING_TYPES.map((t) => ({
    id: t.id,
  }));
  return [...serviceParams, ...typeParams];
}
