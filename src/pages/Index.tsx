import RoyalNavbar from "@/components/RoyalNavbar";
import RoyalHero from "@/components/RoyalHero";
import GameFeatures from "@/components/GameFeatures";
import GameGallery from "@/components/GameGallery";
import DownloadSection from "@/components/DownloadSection";
import RoyalFooter from "@/components/RoyalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <RoyalNavbar />
      <RoyalHero />
      <GameFeatures />
      <GameGallery />
      <DownloadSection />
      <RoyalFooter />
    </div>
  );
};

export default Index;
