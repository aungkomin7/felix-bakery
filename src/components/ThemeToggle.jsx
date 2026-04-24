"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "@aliimam/icons";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex flex-col justify-center">
      <Toggle
        className="group size-8 rounded-full md:size-9 cursor-pointer bg-transparent border  dark:bg-secondary/25 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted"
        pressed={isDark}
        onPressedChange={() =>
          setTheme(isDark ? "light" : "dark")
        }
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <Moon
          size={16}
          aria-hidden="true"
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        />

        <Sun
          size={16}
          aria-hidden="true"
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        />
      </Toggle>
    </div>
  );
}