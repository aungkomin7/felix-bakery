"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

const menuItems = [
  {
    name: "Chocolate Croissant",
    price: "$4.50",
    image: "/menu/croissant.jpg",
    category: "Pastry",
    desc: "Buttery layers filled with rich dark chocolate.",
  },
  {
    name: "Sourdough Bread",
    price: "$7.00",
    image: "/menu/bread.jpg",
    category: "Bread",
    desc: "Naturally fermented artisan loaf baked fresh daily.",
  },
  {
    name: "Strawberry Cake",
    price: "$22.00",
    image: "/menu/cake.jpg",
    category: "Cake",
    desc: "Soft sponge cake topped with fresh strawberries.",
  },
  {
    name: "Cinnamon Roll",
    price: "$5.25",
    image: "/menu/roll.jpg",
    category: "Sweet",
    desc: "Warm fluffy roll with cinnamon glaze.",
  },
];

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
          <SparklesText className="text-primary">Our Fresh Menu</SparklesText>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Taste Every <span className="text-primary">Moment</span>
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Handcrafted breads, pastries, and desserts baked fresh every day
            using premium ingredients and timeless recipes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Card className="group overflow-hidden rounded-2xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-xs font-medium uppercase tracking-wide">
                      {item.category}
                    </span>

                    <span className="text-lg font-semibold">{item.price}</span>
                  </div>

                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  <p className="text-muted-foreground text-sm">{item.desc}</p>

                  <Button className="w-full rounded-xl">Add to Order</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="rounded-xl px-8">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
