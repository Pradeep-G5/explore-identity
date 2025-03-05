
import React from "react";
import PageLayout from "@/components/PageLayout";
import About from "@/components/sections/About";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-5xl font-bold text-center mb-2">
          <span className="title-gradient">About Me</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Get to know more about my skills and background
        </p>
        <About />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
}
