
import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { 
  Home, 
  User,
  Briefcase, 
  Activity, 
  Map, 
  FolderKanban, 
  Mail, 
  Github, 
  Linkedin, 
  AtSign
} from "lucide-react";
import { playSoundEffect } from "./SoundEffects";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  const links = [
    {
      group: "Navigation",
      items: [
        { name: "Home", icon: <Home className="mr-2 h-4 w-4" />, href: "#home" },
        { name: "About", icon: <User className="mr-2 h-4 w-4" />, href: "#about" },
        { name: "Experience", icon: <Briefcase className="mr-2 h-4 w-4" />, href: "#experience" },
        { name: "Activity", icon: <Activity className="mr-2 h-4 w-4" />, href: "#activity" },
        { name: "Journey", icon: <Map className="mr-2 h-4 w-4" />, href: "#journey" },
        { name: "Projects", icon: <FolderKanban className="mr-2 h-4 w-4" />, href: "#projects" },
        { name: "Contact", icon: <Mail className="mr-2 h-4 w-4" />, href: "#contact" },
      ],
    },
    {
      group: "Social",
      items: [
        { name: "GitHub", icon: <Github className="mr-2 h-4 w-4" />, href: "https://github.com", external: true },
        { name: "LinkedIn", icon: <Linkedin className="mr-2 h-4 w-4" />, href: "https://linkedin.com", external: true },
        { name: "Email", icon: <AtSign className="mr-2 h-4 w-4" />, href: "mailto:your-email@example.com" },
      ],
    },
  ];

  const handleSelect = (href: string) => {
    setOpen(false);
    playSoundEffect("command");
    
    setTimeout(() => {
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(href, "_blank");
      }
    }, 200);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {links.map((group) => (
          <CommandGroup key={group.group} heading={group.group}>
            {group.items.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => handleSelect(item.href)}
                className="flex items-center"
              >
                {item.icon}
                <span>{item.name}</span>
                {item.external && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    Opens in new tab
                  </span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
