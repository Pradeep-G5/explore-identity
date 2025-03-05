
import React from "react";

export default function Footer() {
  return (
    <footer className="py-3 px-6 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-1 md:mb-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
        <div className="text-xs text-muted-foreground">
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
