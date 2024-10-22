"use client";

import { useState, useEffect } from "react";
import { Twitter, Instagram, ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-foreground relative w-full pt-24 md:pt-40">
      <hr />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between min-h-[300px]">
          <div className="md:sticky md:top-4 md:self-start space-y-4 mb-8 md:mb-0 order-2 md:order-1">
            <div className="flex items-center justify-center md:justify-start">
              <Image src={"/logo.png"} alt="logo" width={80} height={80} />
              <Image
                src={"/paiper_text.svg"}
                alt="logo"
                width={180}
                height={80}
              />
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Paiper.
              <br />
              All rights reserved.
            </p>
            {showScroll && (
              <Button
                onClick={scrollTop}
                className="w-10 h-10 p-0 rounded-full mx-auto md:mx-0"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="md:sticky md:top-4 md:self-start space-y-8 order-1 md:order-2">
            <nav>
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm text-center md:text-left">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-2">
              <Mail size={20} />
              <a
                href="mailto:contact@yourcompany.com"
                className="text-sm hover:underline"
              >
                info@paiper.app
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://x.com/paiper.app"
                className="text-foreground hover:text-primary"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/paiper.app"
                className="text-foreground hover:text-primary"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
