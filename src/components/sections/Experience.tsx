
import React from "react";
import { experiences } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">Professional Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border border-border/50 shadow-sm bg-card/50 backdrop-blur-sm overflow-hidden group hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </CardTitle>
                <div className="bg-secondary rounded-full p-2 group-hover:bg-primary/10 transition-colors duration-300">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <p className="font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
