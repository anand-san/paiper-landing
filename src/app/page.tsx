import AdditionalInfo from "@/components/additional-info";
import FeatureSet from "@/components/feature-set";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <main className="container mx-auto font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center min-h-screen gap-16">
        <HeroSection />
        <FeatureSet />
        <AdditionalInfo />
        <Footer />
      </div>
    </main>
  );
}
