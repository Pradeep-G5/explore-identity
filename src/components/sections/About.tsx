
import React from "react";
import { about } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">{about.title}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">{about.description}</p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-medium">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Your Name"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
