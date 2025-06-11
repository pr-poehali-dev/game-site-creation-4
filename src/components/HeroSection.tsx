import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Игровая Вселенная
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Откройте для себя тысячи невероятных игр. От инди-хитов до
              AAA-блокбастеров — всё в одном месте!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 h-auto"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4 h-auto"
            >
              <Icon name="Trophy" size={20} className="mr-2" />
              Топ игр
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <Icon
                name="Users"
                size={32}
                className="text-blue-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">50M+ Игроков</h3>
              <p className="text-gray-400">
                Присоединяйтесь к огромному сообществу геймеров
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <Icon
                name="Zap"
                size={32}
                className="text-orange-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">Мгновенный запуск</h3>
              <p className="text-gray-400">Играйте без ожидания загрузки</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <Icon
                name="Star"
                size={32}
                className="text-yellow-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">Эксклюзивы</h3>
              <p className="text-gray-400">Уникальные игры только у нас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
