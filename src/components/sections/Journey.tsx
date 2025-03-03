
import React from "react";
import { journeyPoints } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Map } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">My Journey</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline points */}
          {journeyPoints.map((point, index) => (
            <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Year indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium z-20">
                {point.year}
              </div>
              
              {/* Content */}
              <Card className={`w-5/12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} bg-card/80 backdrop-blur-sm shadow-md relative z-10`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
              
              {/* Circle on timeline */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow-sm"></div>
            </div>
          ))}
          
          {/* End point */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <div className="bg-secondary/80 rounded-full p-4">
              <Map className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
