// import DailyQuota from "./DailyQuota";
import DailyQuota from "./DailyQuota";
import PaiperDemo from "./PaiperDemo";
import BlurFade from "./ui/blur-fade";
import Particles from "./ui/particles";

export default function HeroSection() {
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
        <BlurFade delay={0.2 * 3} inView>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl mb-8 md:mb-16 text-gray-400 mx-3 md:mx-4">
            Transform your mountain of documents into an intelligent, searchable
            digital library. Never lose another important paper again. Become an
            early adopter and transform your document mess into searchable,
            actionable intelligence.
          </p>
        </BlurFade>
        <BlurFade delay={0.2 * 4} inView className="mb-6 space-y-2">
          <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">
            Try it yourself
          </h3>
          <DailyQuota />
        </BlurFade>
        <BlurFade delay={0.2 * 5} inView>
          <PaiperDemo />
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
