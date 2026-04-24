"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full shadow-lg"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5 text-white dark:text-secondary" />
    </Button>
  );
};

export default ScrollToTopButton;
