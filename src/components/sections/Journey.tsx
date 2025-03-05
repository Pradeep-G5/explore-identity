
import React, { useState } from "react";
import { journeyPoints } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Map, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playSoundEffect } from "../SoundEffects";

export default function Journey() {
  const [showAll, setShowAll] = useState(false);
  // Reverse the points to show present at top
  const reversedPoints = [...journeyPoints].reverse();
  // Show only 2 initial points or all points
  const displayPoints = showAll ? reversedPoints : reversedPoints.slice(0, 2);
  // The present year is the first item in the reversed array
  const presentYear = reversedPoints[0].year;

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
          {displayPoints.map((point, index) => {
            const isPresent = point.year === presentYear;
            return (
            <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Year indicator */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -top-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium z-20 ${isPresent ? 'animate-pulse-light' : ''}`}>
                {point.year}
              </div>
              
              {/* Content */}
              <Card className={`w-5/12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} bg-card/80 backdrop-blur-sm shadow-md relative z-10`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
              
              {/* Circle on timeline with glow effect for present */}
              <div className={`absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                isPresent ? 'bg-primary shadow-[0_0_10px_2px_hsl(var(--primary))] animate-float' : 'bg-primary'
              }`}></div>
            </div>
          )})}
          
          {/* Show more/less button */}
          {!showAll && (
            <div className="flex justify-center my-8">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => {
                  playSoundEffect("click");
                  setShowAll(true);
                }}
              >
                <span>Show Full Journey</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          {showAll && (
            <div className="flex justify-center my-8">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => {
                  playSoundEffect("click");
                  setShowAll(false);
                }}
              >
                <span>Show Less</span>
                <ChevronDown className="h-4 w-4 rotate-180" />
              </Button>
            </div>
          )}
          
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
