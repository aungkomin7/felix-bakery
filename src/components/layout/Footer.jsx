import { Separator } from "@/components/ui/separator";

import Logo from "@/components/shadcn-studio/logo";
// import { Facebook, FacebookDoodle, Instagram, WhatsappRounded, Youtube } from "@aliimam/icons";
import {  Facebook, Instagram, WhatsApp, YouTube } from "@aliimam/logos";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <a href="#">
          <div className="flex items-center gap-3">
            <Logo className="gap-3" />
          </div>
        </a>

        {/* <div className="flex items-center gap-5 whitespace-nowrap">
          <a
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            About
          </a>
          <a
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Features
          </a>
          <a
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Works
          </a>
          <a
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Career
          </a>
        </div> */}

        <div className="flex items-center gap-4">
          <a
            href="https://web.facebook.com/felixbakery/?_rdc=1&_rdr#"
            target="_blank"
          >
            {/* <Facebook size={23} /> */}
            <Facebook />
          </a>
          <a href="https://www.instagram.com/felixmesika" target="_blank">
            <Instagram size={23} />
          </a>
          <a href="https://www.youtube.com/@felixbakery4520" target="_blank">
            <YouTube size={23} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=66993688432"
            target="_blank"
          >
            <WhatsApp size={23} />
          </a>
        </div>
      </div>
      <Separator />
      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{" "}
          <a href="#" className="hover:underline">
            Felix Bakery
          </a>
          , Made with ❤️ by Thomas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
