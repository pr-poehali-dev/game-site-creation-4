import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: "1999 ₽",
      originalPrice: "2999 ₽",
      discount: "-33%",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=400",
      rating: 4.5,
      genre: "RPG",
    },
    {
      id: 2,
      title: "Elden Ring",
      price: "2499 ₽",
      originalPrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&w=400",
      rating: 4.8,
      genre: "Action RPG",
    },
    {
      id: 3,
      title: "FIFA 24",
      price: "3499 ₽",
      originalPrice: "4999 ₽",
      discount: "-30%",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=400",
      rating: 4.2,
      genre: "Sports",
    },
    {
      id: 4,
      title: "Baldur's Gate 3",
      price: "2799 ₽",
      originalPrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&w=400",
      rating: 4.9,
      genre: "RPG",
    },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Рекомендуемые игры
          </h2>
          <p className="text-gray-400 text-lg">
            Самые популярные и высоко оцененные игры этого месяца
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {game.discount && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {game.discount}
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm rounded px-2 py-1">
                  <div className="flex items-center text-yellow-400">
                    <Icon name="Star" size={14} className="mr-1 fill-current" />
                    <span className="text-white text-sm">{game.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <span className="text-purple-400 text-sm font-semibold">
                    {game.genre}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 line-clamp-1">
                  {game.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 font-bold text-lg">
                      {game.price}
                    </span>
                    {game.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        {game.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />В
                  корзину
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
          >
            Показать все игры
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
