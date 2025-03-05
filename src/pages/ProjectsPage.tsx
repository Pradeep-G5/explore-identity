
import React from "react";
import PageLayout from "@/components/PageLayout";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ScrollToTop";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-5xl font-bold text-center mb-2">
          <span className="title-gradient">Projects</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          A showcase of my recent work and side projects
        </p>
        <Projects />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
}
