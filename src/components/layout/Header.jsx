"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import { Button } from "@/components/ui/button";
import MenuDropdown from "@/components/shadcn-studio/blocks/menu-dropdown";
import MenuNavigation from "@/components/shadcn-studio/blocks/menu-navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Header = ({ navigationData, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() || 0;

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={false}
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={cn(
          "h-17.5 w-full border-b transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur shadow-md"
            : "bg-transparent border-transparent",
          className
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="felix-logo.jpg"
              alt="felix"
              className="size-10 rounded-full md:size-12"
            />
            <span className="text-primary text-[20px] font-semibold">
              Felix Bakery
            </span>
          </a>

          {/* Desktop Nav */}
          <MenuNavigation
            navigationData={navigationData}
            className="max-lg:hidden **:data-[slot=navigation-menu-list]:gap-1"
          />

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <MenuDropdown
              align="end"
              navigationData={navigationData}
              trigger={
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full lg:hidden"
                >
                  <MenuIcon className="size-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;