"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { MarqueeProduct } from "@/components/MarqueeProduct";
import { ArrowRightIcon } from "lucide-react";



const MenuSection = () => {
  return (
    <section id="menu" className="py-8 sm:py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <SparklesText className="text-primary text-3xl font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl">
            Our Fresh Menu
          </SparklesText>

          <h2 className="mt-4 text-3xl font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl">
            Taste Every <span className="text-primary">Moment</span>
          </h2>

          <p className=" mx-auto mt-4  text-muted-foreground max-w-xl text-xl max-lg:text-center">
            Handcrafted breads, pastries, and desserts baked fresh every day
            using premium ingredients and timeless recipes.
          </p>
        </motion.div>

        <MarqueeProduct />

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="group  relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
          >
            <a href="#orderSection">
              View Full Menu
              <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MenuSection;
