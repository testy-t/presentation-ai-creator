interface Presentation {
  title: string;
  image: string;
}

const AnimatedPresentations = () => {
  // Первый ряд презентаций (будет снизу)
  const presentationsRow1: Presentation[] = [
    { title: "Принципы дизайна", image: "https://cdn.poehali.dev/files/967eb143-04ee-4da1-932e-b79cf297ab48.png" },
    { title: "Концепции Галицкого парка", image: "/placeholder.svg" },
    { title: "Научные аспекты в мифах", image: "/placeholder.svg" },
    { title: "Этапы маркетинговых исследований", image: "/placeholder.svg" },
    { title: "Методы сбора данных", image: "/placeholder.svg" },
  ];

  // Второй ряд презентаций (будет посередине)
  const presentationsRow2: Presentation[] = [
    { title: "Польза зарядки для здоровья", image: "/placeholder.svg" },
    { title: "Мифы Древней Греции", image: "/placeholder.svg" },
    { title: "Изменения в потреблении продуктов", image: "/placeholder.svg" },
    { title: "Основные цели исследований", image: "/placeholder.svg" },
    { title: "История Берлина", image: "/placeholder.svg" },
  ];

  // Третий ряд презентаций (будет сверху)
  const presentationsRow3: Presentation[] = [
    { title: "Нейроструктурный анализ", image: "/placeholder.svg" },
    { title: "Социализация", image: "/placeholder.svg" },
    { title: "Культурные аттракционы", image: "/placeholder.svg" },
    { title: "Принципы городской застройки", image: "/placeholder.svg" },
    { title: "Анализ потребительского спроса", image: "/placeholder.svg" },
  ];

  // Дублирование элементов для бесконечной прокрутки
  const duplicateItems = (items: Presentation[]) => [...items, ...items];
  
  const row1Items = duplicateItems(presentationsRow1);
  const row2Items = duplicateItems(presentationsRow2);
  const row3Items = duplicateItems(presentationsRow3);

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mb-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Примеры презентаций
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Создайте подобные презентации за считанные минуты
          </p>
        </div>
      </div>

      <div className="presentations-container">
        {/* Первый ряд - снизу, движется вправо */}
        <div className="presentations-row presentations-row-1 slide-right">
          {row1Items.map((item, index) => (
            <div key={`row1-${index}`} className="flex-none w-64 md:w-72 mx-2 rounded-lg overflow-hidden shadow-lg bg-card">
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-medium p-4">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Второй ряд - посередине, движется влево */}
        <div className="presentations-row presentations-row-2 slide-left">
          {row2Items.map((item, index) => (
            <div key={`row2-${index}`} className="flex-none w-64 md:w-72 mx-2 rounded-lg overflow-hidden shadow-lg bg-card">
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-medium p-4">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Третий ряд - сверху, движется вправо */}
        <div className="presentations-row presentations-row-3 slide-right">
          {row3Items.map((item, index) => (
            <div key={`row3-${index}`} className="flex-none w-64 md:w-72 mx-2 rounded-lg overflow-hidden shadow-lg bg-card">
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-medium p-4">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedPresentations;
