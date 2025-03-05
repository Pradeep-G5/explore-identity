
import React from "react";
import PageLayout from "@/components/PageLayout";
import Journey from "@/components/sections/Journey";
import ScrollToTop from "@/components/ScrollToTop";

export default function JourneyPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          <span className="title-gradient">Journey</span>
        </h1>
        <Journey />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
}
