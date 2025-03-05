
import React from "react";
import PageLayout from "@/components/PageLayout";
import Activity from "@/components/sections/Activity";
import ScrollToTop from "@/components/ScrollToTop";

export default function ActivityPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-5xl font-bold text-center mb-2">
          <span className="title-gradient">Activity</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          A collection of things I'm learning and exploring
        </p>
        <Activity />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
}
