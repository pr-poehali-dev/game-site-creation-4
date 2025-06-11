import Icon from "@/components/ui/icon";

const GameCategories = () => {
  const categories = [
    {
      name: "Action",
      icon: "Zap",
      color: "from-red-500 to-orange-500",
      count: "1,234",
    },
    {
      name: "RPG",
      icon: "Sword",
      color: "from-purple-500 to-pink-500",
      count: "856",
    },
    {
      name: "Стратегии",
      icon: "Target",
      color: "from-blue-500 to-cyan-500",
      count: "642",
    },
    {
      name: "Спорт",
      icon: "Trophy",
      color: "from-green-500 to-emerald-500",
      count: "423",
    },
    {
      name: "Гонки",
      icon: "Car",
      color: "from-yellow-500 to-orange-500",
      count: "312",
    },
    {
      name: "Хоррор",
      icon: "Ghost",
      color: "from-gray-700 to-slate-800",
      count: "198",
    },
  ];

  return (
    <section className="bg-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Игровые категории
          </h2>
          <p className="text-gray-400 text-lg">
            Найдите игры по вашему любимому жанру
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-slate-900 rounded-xl p-6 text-center border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={category.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">{category.count} игр</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30">
          <div className="text-center">
            <Icon
              name="Gamepad2"
              size={48}
              className="text-purple-400 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-4">
              Не можете выбрать?
            </h3>
            <p className="text-gray-300 mb-6">
              Используйте наш умный рекомендательный алгоритм, чтобы найти
              идеальную игру именно для вас
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
              <Icon name="Sparkles" size={20} className="inline mr-2" />
              Найти мою игру
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
