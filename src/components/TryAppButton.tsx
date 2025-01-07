import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";
import BlurFade from "./ui/blur-fade";
import Link from "next/link";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { usePostHog } from "posthog-js/react";

export default function TryAppButton({
  delay = 0.5,
  title = "Introducing Paiper App",
}) {
  const posthog = usePostHog();

  return (
    <BlurFade delay={delay} inView>
      <Link
        href="https://my.paiper.app/login"
        target="_blank"
        onClick={() => {
          posthog.capture("app-announcement-clicked");
        }}
      >
        <AnimatedGradientText className="my-8">
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            {title}
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </Link>
    </BlurFade>
  );
}
