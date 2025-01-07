"use client";
import PaiperDemo from "./PaiperDemo";
import BlurFade from "./ui/blur-fade";
import Particles from "./ui/particles";
import TryAppButton from "./TryAppButton";

export default function HeroSection() {
  return (
    <section className="flex justify-center h-full pt-12 items-center">
      <div className="text-center max-w-7xl mt-12">
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
        <TryAppButton />

        <BlurFade delay={0.2 * 3} inView>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl mb-8 md:mb-16 text-gray-400 mx-3 md:mx-4">
            Transform your mountain of documents into an intelligent, searchable
            digital library. Never lose another important paper again. Become an
            early adopter and transform your document mess into searchable,
            actionable intelligence.
          </p>
        </BlurFade>
        <BlurFade
          delay={0.2 * 4}
          className="flex flex-col items-center space-y-20"
        >
          <video
            className="mt-6 rounded-xl"
            autoPlay
            loop
            muted
            playsInline
            width={"80%"}
          >
            <source
              src="https://pub-a26b640eaccb4e968e1bd77896000335.r2.dev/portfolio-assets/paiperapp.mp4"
              type="video/mp4"
            />
          </video>

          <BlurFade delay={0.2 * 5} inView className="w-[80%]">
            <PaiperDemo />
          </BlurFade>
        </BlurFade>
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
