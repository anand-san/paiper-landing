import React from "react";
import { CustomSvgIcons } from "./custom-svg-icons";
import DocumentExplorer from "./ui/file-tree";
import OrbitingCircles from "./ui/orbiting-circles";
import BlurFade from "./ui/blur-fade";
import { IntelligenceHub } from "./ui/beam";
import { FileScanAnimation } from "./feature-card";

export default function FeatureSet() {
  return (
    <BlurFade delay={0.2 * 6} inView>
      <section className="w-full max-w-5xl flex flex-col space-y-20 mx-auto p-2 sm:p-8">
        <div className="w-full pt-0 md:pt-16">
          {/* Outer container with glow effect */}
          <div className="relative group">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-stone-100 rounded-xl blur-xl opacity-90 group-hover:opacity-100 transition duration-1000"></div>
            {/* Main card */}
            <div className="h-auto sm:h-[500px] flex flex-col sm:flex-row justify-between items-center relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-neutral-100 shadow-lg">
              <div className="w-full sm:max-w-[50%] p-8 sm:p-12">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

                <div className="relative z-10 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                    Your Intelligence Hub
                  </h2>

                  <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-400">
                    Every document adds to your knowledge base. Our AI connects
                    the dots across all your documents, surfacing patterns and
                    insights you never knew existed. From predicting payment
                    dates to identifying contract risks, turn your document
                    archive into your strategic advantage.
                  </p>
                </div>
              </div>
              <IntelligenceHub />
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Outer container with glow effect */}
          <div className="relative group">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br to-blue-100 from-stone-100 rounded-xl blur-xl opacity-90 group-hover:opacity-100 transition duration-1000"></div>

            {/* Main card */}
            <div className="h-auto sm:h-[500px] flex flex-col sm:flex-row justify-between items-center relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 to-blue-50 p-4 sm:p-8 shadow-lg">
              <div className="relative z-10 order-2 sm:order-1 mt-4 sm:mt-0">
                <DocumentExplorer />
              </div>
              <div className="w-full sm:max-w-[50%] order-1 sm:order-2">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

                <div className="relative z-10 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                    AI Powered Analysis & Categorization{" "}
                  </h2>

                  <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-400">
                    Our AI automatically extracts key details, categorizes your
                    documents (e.g., invoices, receipts, contracts), and
                    summarizes the most important information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Outer container with glow effect */}
          <div className="relative group">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br to-blue-100 from-stone-100 rounded-xl blur-xl opacity-90 group-hover:opacity-100 transition duration-1000"></div>

            {/* Main card */}
            <div className="h-auto sm:h-[500px] flex flex-col sm:flex-row justify-between items-center relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 to-blue-50 p-4 sm:p-8 shadow-lg">
              <div className="relative z-10 order-2 sm:order-1 mt-4 sm:mt-0">
                <FileScanAnimation />
              </div>
              <div className="w-full sm:max-w-[50%] order-1 sm:order-2">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

                <div className="relative z-10 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                    Time Travel Through Your Documents{" "}
                  </h2>

                  <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-400">
                    What did we agree to last year?&quot; &quot;How much have I
                    paid in healthcare this year?&quot; Stop digging through
                    files. Start getting instant answers. Paiper doesn&apos;t
                    just store your documents – it understands them, remembers
                    them, and puts critical information at your fingertips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Outer container with glow effect */}
          <div className="relative group">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-100 to-stone-100 rounded-xl blur-xl opacity-90 group-hover:opacity-100 transition duration-1000"></div>
            {/* Main card */}
            <div className="h-auto sm:h-[500px] flex flex-col sm:flex-row justify-between items-center relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-neutral-100 shadow-lg">
              <div className="w-full sm:max-w-[50%] p-8 sm:p-12">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

                <div className="relative z-10 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                    Privacy First Document Processing
                  </h2>

                  <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-400">
                    Your files are not stored on Paiper servers. You can use our
                    cloud integrations and bring your files directly from your
                    cloud storage. Paiper also offer processing without any
                    storage, ensuring that you are in control of your documents.
                  </p>
                </div>
              </div>
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                  📄
                </span>
                <OrbitingCircles
                  className="size-[30px] border-none bg-transparent"
                  duration={20}
                  delay={20}
                  radius={80}
                >
                  <CustomSvgIcons.dropbox />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[30px] border-none bg-transparent"
                  duration={20}
                  delay={10}
                  radius={80}
                >
                  <CustomSvgIcons.icloud />
                </OrbitingCircles>

                {/* Outer Circles (reverse) */}
                <OrbitingCircles
                  className="size-[50px] border-none bg-transparent"
                  radius={190}
                  duration={20}
                  reverse
                >
                  <CustomSvgIcons.onedrive />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[50px] border-none bg-transparent"
                  radius={190}
                  duration={20}
                  delay={20}
                  reverse
                >
                  <CustomSvgIcons.googleDrive />
                </OrbitingCircles>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
}