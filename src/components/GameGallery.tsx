const GameGallery = () => {
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?ixlib=rb-4.0.3",
      title: "Строительство городов",
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3",
      title: "Военные сражения",
    },
    {
      url: "https://images.unsplash.com/photo-1595431370100-5b9aa436c5de?ixlib=rb-4.0.3",
      title: "Дворцовые интриги",
    },
    {
      url: "https://images.unsplash.com/photo-1594736797933-d0400ad7bb0b?ixlib=rb-4.0.3",
      title: "Торговые пути",
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Скриншоты игры
          </h2>
          <p className="text-xl text-gray-400">
            Взгляните на великолепие Российской империи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
            >
              <img
                src={screenshot.url}
                alt={screenshot.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold">
                    {screenshot.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGallery;
