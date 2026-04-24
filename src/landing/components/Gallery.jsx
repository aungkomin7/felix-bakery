import { cn } from "@/lib/utils";
import { Instagram } from "@aliimam/icons";

const Gallery = ({ sections }) => {
  return (
    <section id="gallery" className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {/* <span className='relative z-1'>
              Explore our
              <span
                className='bg-primary absolute bottom-1 left-0 -z-1 h-px w-full'
                aria-hidden='true'></span>
            </span>{' '}
            Gallery */}
            Feast Your <span className="text-primary">Eyes</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            A visual journey through our kitchen. Follow us on Instagram for
            daily updates and behind-the-scenes content.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={cn({
                "grid grid-cols-2 gap-6": section.type === "grid",
              })}
            >
              {section.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10 ">
        <a
          href="https://instagram.com"
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
