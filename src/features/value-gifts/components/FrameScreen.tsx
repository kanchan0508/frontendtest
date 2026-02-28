import CuratedContentCarouselSection from "./CuratedContentCarouselSection";
import AffirmationHeroSection from "./AffirmationHeroSection";
import ProductFeaturesSection from "./ProductFeaturesSection";
import ValueGiftsMobileSection from "./ValueGiftsMobileSection";

export default function FrameScreen() {
  return (
    <main className="flex w-full flex-col items-center gap-6 overflow-hidden">
      <ValueGiftsMobileSection />

      <div className="hidden sm:flex w-full flex-col items-center gap-6 overflow-hidden">
        <CuratedContentCarouselSection />
        <AffirmationHeroSection />
        <ProductFeaturesSection />
      </div>
    </main>
  );
}
