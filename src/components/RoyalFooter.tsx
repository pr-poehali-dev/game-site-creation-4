import Icon from "@/components/ui/icon";

const RoyalFooter = () => {
  return (
    <footer className="bg-slate-900 border-t border-amber-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-amber-400" size={24} />
              <span className="text-xl font-bold text-white font-montserrat">
                Royal Russian
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Великая стратегическая игра о создании и управлении Российской
              империей.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                className="text-gray-400 hover:text-amber-400 cursor-pointer"
                size={20}
              />
              <Icon
                name="Twitter"
                className="text-gray-400 hover:text-amber-400 cursor-pointer"
                size={20}
              />
              <Icon
                name="Youtube"
                className="text-gray-400 hover:text-amber-400 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Игра</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer">
                Системные требования
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                Руководство игрока
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                Обновления
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                Достижения
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer">Форум</li>
              <li className="hover:text-amber-400 cursor-pointer">Discord</li>
              <li className="hover:text-amber-400 cursor-pointer">
                Соревнования
              </li>
              <li className="hover:text-amber-400 cursor-pointer">Гильдии</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer">
                Техподдержка
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                Отчёт о баге
              </li>
              <li className="hover:text-amber-400 cursor-pointer">Контакты</li>
              <li className="hover:text-amber-400 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Royal Russian. Все права защищены. Создано в России с ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RoyalFooter;
