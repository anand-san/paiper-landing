"use client";
import { ChevronRight } from "lucide-react";
import DailyQuota from "./DailyQuota";
import PaiperDemo from "./PaiperDemo";
import AnimatedGradientText from "./ui/animated-gradient-text";
import BlurFade from "./ui/blur-fade";
import Particles from "./ui/particles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

export default function HeroSection() {
  const posthog = usePostHog();
  return (
    <section className="flex justify-center h-full pt-12 items-center">
      <div className="text-center max-w-7xl">
        <BlurFade delay={0.2} inView>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4">
            Stop Drowning in Papers
          </h1>
        </BlurFade>
        <BlurFade delay={0.2 * 2} inView>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-8 lg:mb-16">
            Start Finding in Seconds
          </h1>
        </BlurFade>
        {posthog.isFeatureEnabled("public-demo") && (
          <BlurFade delay={0.25 * 2} inView>
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
                  Announcing Paiper App
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </Link>
          </BlurFade>
        )}

        <BlurFade delay={0.2 * 3} inView>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl mb-8 md:mb-16 text-gray-400 mx-3 md:mx-4">
            Transform your mountain of documents into an intelligent, searchable
            digital library. Never lose another important paper again. Become an
            early adopter and transform your document mess into searchable,
            actionable intelligence.
          </p>
        </BlurFade>
        <>
          <BlurFade delay={0.2 * 4} inView className="mb-6 space-y-2">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">
              Try it yourself
            </h3>
            <DailyQuota />
          </BlurFade>
          <BlurFade delay={0.2 * 5} inView>
            <PaiperDemo />
          </BlurFade>
        </>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#000"}
        refresh
      />
    </section>
  );
}
