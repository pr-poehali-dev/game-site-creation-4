import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const RoyalNavbar = () => {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-amber-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-amber-400" size={28} />
              <span className="text-2xl font-bold text-white font-montserrat">
                Royal Russian
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10"
              >
                Об игре
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10"
              >
                Галерея
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10"
              >
                Новости
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
            <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700">
              <Icon name="Play" size={16} className="mr-2" />
              Играть
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RoyalNavbar;
