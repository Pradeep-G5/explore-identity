
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/60 backdrop-blur-sm overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 flex flex-col animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="overflow-hidden aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-center text-sm">{project.description}</p>
                  <div className="flex gap-3 mt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="rounded-full flex gap-2 items-center"
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
                      className="rounded-full flex gap-2 items-center"
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
            </Card>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
