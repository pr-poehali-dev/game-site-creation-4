import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GameNavbar = () => {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-purple-400" size={28} />
              <span className="text-2xl font-bold text-white font-montserrat">
                GameZone
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
              >
                Игры
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
              >
                Новинки
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
              >
                Топ игр
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
              >
                Акции
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
            >
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GameNavbar;
