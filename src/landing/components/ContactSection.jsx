// "use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ContactSection = ({ contactInfo }) => {
  return (
    <section id="contactUs" className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Contact Us
          </h2>
          <span className="bg-primary absolute top-9 left-0 h-px w-full"></span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          

          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Visit Our <span className="text-primary">Bakery</span>
            </h3>
            <p className="text-muted-foreground mb-10 text-lg font-medium">
              Come by for a warm welcome and fresh-from-the-oven treats. We're
              always happy to see you!
            </p>

            {/* Contact Info Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card className="border-none shadow-none" key={index}>
                  <CardContent className="flex flex-col items-center gap-4 text-center">
                    <Avatar className="size-9 border">
                      <AvatarFallback className="bg-transparent [&>svg]:size-5">
                        <info.icon />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-3">
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


          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4875.337103972348!2d100.5324993!3d13.715760399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298cb618e7853%3A0x513104cb7bb6725!2sFELIX%20BAKERY%20%26%20COFFEE!5e1!3m2!1sen!2sth!4v1777044606604!5m2!1sen!2sth"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Felix Bakery Location"
            className="size-full rounded-md object-cover h-96 md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
