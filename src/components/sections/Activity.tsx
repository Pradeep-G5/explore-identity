
import React from "react";
import { activities } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity as ActivityIcon, Lightbulb, BookOpen, Users } from "lucide-react";

const activityIcons = [Lightbulb, BookOpen, Users];

export default function Activity() {
  return (
    <section id="activity" className="section bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">Activities & Interests</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activityIcons[index % activityIcons.length];
            
            return (
              <Card 
                key={index} 
                className="border border-border/50 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="flex flex-col items-center pb-4 pt-6 text-center">
                  <div className="p-3 bg-secondary/80 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <CardDescription className="text-muted-foreground text-base">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
