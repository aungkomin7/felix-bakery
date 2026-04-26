"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const apps = [
  {
    name: "Grab Food",
    image: "grab-food.jpg",
    href: "https://r.grab.com/g/6-20260426_024632_623a6bcb8e9b4decb22c4ed56e64e00f_MEXMPS-3-CZJANTLKTFUTT2",
  },
  {
    name: "Line Man",
    image: "lineman.jpg",
    href: "https://lin.ee/nxoseV0?openExternalBrowser=1",
  },
  {
    name: "Shopee Food",
    image: "shopee.jpg",
    href: "https://shopee.co.th/search?keyword=felix%20bakery",
  },
  {
    name: "Lazada",
    image: "lazada.jpg",
    href: "https://s.lazada.co.th/s.ZgJs25",
  },
  {
    name: "Robinhood",
    image: "robinhood.jpg",
    href: "#",
  },
];

export function DockStation() {
  return (
    <div className="relative">
      <TooltipProvider delayDuration={120}>
        <Dock
          iconMagnification={80}
          iconDistance={100}
          iconSize={60}
          className="border-transparent md:-ml-2"
        >
          {apps.map((app, index) => (
            <DockIcon key={index} className="bg-black/10 dark:bg-white/10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={app.href} target="_blank">
                    <img
                      src={app.image}
                      alt={app.name}
                      className="rounded-full object-cover"
                    />
                  </a>
                </TooltipTrigger>

                <TooltipContent side="top">
                  <p>{app.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
