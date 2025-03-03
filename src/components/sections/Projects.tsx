
import React from "react";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { playSoundEffect } from "../SoundEffects";
import ScrollToTop from "../ScrollToTop";

export default function Projects() {
  return (
    <section id="projects" className="section bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="title-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A list of projects I have been working on or built
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="relative bg-card/60 backdrop-blur-sm overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col animate-fade-in group min-h-[400px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Main card content - visible by default */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-2">
                <div className="flex gap-3 ml-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full flex items-center gap-2"
                    onClick={() => {
                      playSoundEffect("click");
                      window.open("https://github.com/yourusername/project", "_blank");
                    }}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="rounded-full flex items-center gap-2"
                    onClick={() => {
                      playSoundEffect("click");
                      window.open(project.link, "_blank");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardFooter>
              
              {/* Overlay card content - visible on hover */}
              <div className="absolute inset-0 bg-card/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => {
                        playSoundEffect("click");
                        window.open("https://github.com/yourusername/project", "_blank");
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => {
                        playSoundEffect("click");
                        window.open(project.link, "_blank");
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-foreground mb-6 flex-1">{project.description}</p>
                
                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => {
                      playSoundEffect("click");
                      window.open("https://github.com/yourusername/project", "_blank");
                    }}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => {
                      playSoundEffect("click");
                      window.open(project.link, "_blank");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
