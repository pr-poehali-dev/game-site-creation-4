
import GameNavbar from "@/components/GameNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturedGames from "@/components/FeaturedGames";
import GameCategories from "@/components/GameCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <GameNavbar />
      <HeroSection />
      <FeaturedGames />
      <GameCategories />
    </div>Отлично!
  );
};

export default Index;
