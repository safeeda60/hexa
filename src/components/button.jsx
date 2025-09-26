// src/ui/Button.jsx
import React from "react";
import { cn } from "../lib/utils";

const Button = ({ children, variant = "default", size = "md", className = "", asChild = false, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-800",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  const classes = cn(baseClasses, variants[variant] || "", sizes[size] || "", className);
  const Comp = asChild ? "div" : "button";

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
};

export { Button };
