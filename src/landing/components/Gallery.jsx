"use client";
import { motion } from "motion/react";
import { Tilt } from "@/components/Tilt";
import { cn } from "@/lib/utils";
import { Instagram } from "@aliimam/icons";
import { InView } from "@/components/InView";

const Gallery = ({ sections }) => {
  return (
    <section id="gallery" className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Feast Your <span className="text-primary">Eyes</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            A visual journey through our kitchen. Follow us on Instagram for
            daily updates and behind-the-scenes content.
          </p>
        </div>

        {/* Gallery Grid */}
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={cn({
                  "grid grid-cols-2 gap-6": section.type === "grid",
                })}
              >
                {section.images.map((image, imageIndex) => {
                  return (
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)",
                        },
                      }}
                      key={imageIndex}
                      className="mb-4"
                    >
                      <Tilt>
                        <img
                          key={imageIndex}
                          src={image.src}
                          alt={image.alt}
                          className="rounded-lg object-cover"
                        />
                      </Tilt>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </InView>
      </div>
      <div className="text-center mt-10 ">
        <a
          href="https://www.instagram.com/felixmesika"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <Instagram size={20} />
          Follow @felixbakery on Instagram
        </a>
      </div>
    </section>
  );
};

export default Gallery;
