import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const RoyalHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-red-900/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Royal Russian
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Возглавьте великую Российскую империю! Стройте города, ведите
              войны, заключайте альянсы и правьте огромными территориями от
              Балтики до Тихого океана.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-lg px-8 py-4 h-auto"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать царствование
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-500/10 text-lg px-8 py-4 h-auto"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать игру
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-500/30">
              <Icon
                name="Users"
                size={32}
                className="text-amber-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">2M+ Игроков</h3>
              <p className="text-gray-400">
                Присоединяйтесь к великой империи онлайн
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-500/30">
              <Icon
                name="MapPin"
                size={32}
                className="text-red-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">50+ Городов</h3>
              <p className="text-gray-400">Стройте и развивайте свою империю</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-500/30">
              <Icon
                name="Sword"
                size={32}
                className="text-orange-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">Эпические битвы</h3>
              <p className="text-gray-400">Завоюйте соседние королевства</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalHero;
