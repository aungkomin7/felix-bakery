"use client";

import React from "react";
import { motion } from "motion/react";

const OrderSection = () => {
  return (
    <section id="order" className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary mb-2 text-sm font-semibold uppercase">
              order now
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Freshly Baked <span className="text-primary">Delivered</span> to
              You
            </h2>

            <p className="text-muted-foreground mb-8 text-lg">
              Craving artisan bread, pastries, or cakes? Place your order today
              and enjoy fresh bakery favorites made with love every morning.
            </p>

            <div className="flex items-center gap-x-2">
              <a href="#">
                <img  className="border bg-white" src="lineman.svg" alt="lineman" />
              </a>
              <a href="#">
                <img className="border bg-white" src="grab-food.svg" alt="grab" />
              </a>
              <a href="#">
                <img className="border bg-white" src="shopee.svg" alt="shopee" />
              </a>
              <a href="#">
                <img className="border bg-white" src="lazada.svg" alt="lazada" />
              </a>
            </div>
          </motion.div>

          {/* Right Cards */}
          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5"
          >
            <Card className="rounded-2xl">
              <CardContent className="flex items-start gap-4 p-6">
                <Clock3 className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-semibold">Opening Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sun: 7:00 AM – 9:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="flex items-start gap-4 p-6">
                <MapPin className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-semibold">Pickup & Delivery</h4>
                  <p className="text-muted-foreground">
                    Fast local delivery or store pickup available.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="flex items-start gap-4 p-6">
                <ShoppingBag className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-semibold">Custom Orders</h4>
                  <p className="text-muted-foreground">
                    Cakes, party trays, and bulk bakery orders accepted.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
