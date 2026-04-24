import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = ({ aboutInfo }) => {
  return (
    <section id="aboutUs" className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            // src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-1.png"
            src="felix.jpg"
            alt="Contact illustration"
            className="size-full rounded-md object-cover object-top  max-lg:max-h-70"
          />
          <div>
            <p className="text-primary text-sm font-medium uppercase mb-2">
              about us
            </p>
            <h3 className="mb-6 text-2xl font-semibold">
              A Legacy of <span className="text-primary">Delicious</span>{" "}
              Moments
            </h3>

            <p className="text-muted-foreground mb-10 text-lg font-medium">
              Felix Bakery started as a small family dream in Tel Aviv, Israel.
              What began as a humble bakery has grown into a beloved destination
              for those who appreciate authentic, handcrafted baked goods.
            </p>
            <p className="text-muted-foreground mb-10 text-lg font-medium">
              Our master bakers wake up before dawn every day, ensuring that by
              the time you visit, everything is fresh from the oven. We believe
              in using only the finest ingredients, no shortcuts, and no
              compromises.
            </p>

            {/* Contact Info Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {aboutInfo.map((info, index) => (
                <Card className="border-none shadow-none" key={index}>
                  <CardContent className="flex flex-col items-center gap-4 text-center">
                    <Avatar className="size-9 border">
                      <AvatarFallback className="bg-transparent [&>svg]:size-5">
                        <info.icon />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-3 ">
                      <h4 className="text-lg font-semibold">{info.title}</h4>
                      <div className="text-muted-foreground text-base font-medium">
                        {info.description.split("\n").map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
