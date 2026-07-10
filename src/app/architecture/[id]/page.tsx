import React from "react";
import ArchitectureSub from "../../../pages/ArchitectureSub";
import { ARCHITECTURE_SERVICES } from "../../../lib/services";
import JsonLd from "../../../components/JsonLd";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id as "residential" | "commercial" | "interior-design";

  return (
    <>
      <JsonLd path={`/architecture/${id}`} />
      <ArchitectureSub id={id} />
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const service = ARCHITECTURE_SERVICES.find((srv) => srv.id === id);

  return {
    title: service ? `${service.title} | MWAI Architects` : "Architecture Service",
    description: service ? service.shortDescription : "Florida's premier architectural firm specializing in custom luxury designs.",
  };
}

export async function generateStaticParams() {
  return ARCHITECTURE_SERVICES.map((srv) => ({
    id: srv.id,
  }));
}
