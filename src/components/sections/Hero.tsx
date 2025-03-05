
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playSoundEffect } from "../SoundEffects";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="section relative flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="z-10 space-y-6 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
          <span className="title-gradient">Hello, I'm </span>
          <span className="block mt-2">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          I create elegant, functional, and user-centric digital experiences.
        </p>

        <p className="text-lg text-muted-foreground max-w-lg mx-auto animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          Full-stack developer specializing in modern web technologies and intuitive user interfaces.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          <Button 
            size="lg"
            className="font-medium rounded-full" 
            onClick={() => {
              playSoundEffect("click");
              navigate("/contact");
            }}
          >
            Get in Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="font-medium rounded-full" 
            onClick={() => {
              playSoundEffect("click");
              navigate("/projects");
            }}
          >
            View Projects
          </Button>

          <Button 
            variant="secondary" 
            size="lg"
            className="font-medium rounded-full flex items-center gap-2" 
            onClick={() => {
              playSoundEffect("click");
              window.open("/resume.pdf", "_blank");
            }}
          >
            <FileText className="h-5 w-5" />
            Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-10 w-10 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm"
          onClick={() => {
            playSoundEffect("click");
            navigate("/about");
          }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </section>
  );
}
