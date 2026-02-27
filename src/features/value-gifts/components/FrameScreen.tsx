import CuratedContentCarouselSection from "./CuratedContentCarouselSection";
import AffirmationHeroSection from "./AffirmationHeroSection";
import ProductFeaturesSection from "./ProductFeaturesSection";

export default function FrameScreen() {
  return (
    <main className="flex w-full flex-col items-center gap-6 overflow-hidden">
      <CuratedContentCarouselSection />
      <AffirmationHeroSection />
      <ProductFeaturesSection />
    </main>
  );
}
