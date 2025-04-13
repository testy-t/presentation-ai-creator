import { useRef, useEffect } from "react";

interface Presentation {
  title: string;
  image: string;
}

const AnimatedPresentations = () => {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const presentationsRow1: Presentation[] = [
    { title: "Принципы дизайна", image: "https://cdn.poehali.dev/files/967eb143-04ee-4da1-932e-b79cf297ab48.png" },
    { title: "Концепции Галицкого парка", image: "/placeholder.svg" },
    { title: "Научные аспекты в мифах", image: "/placeholder.svg" },
    { title: "Этапы маркетинговых исследований", image: "/placeholder.svg" },
    { title: "Методы сбора данных", image: "/placeholder.svg" },
  ];

  const presentationsRow2: Presentation[] = [
    { title: "Польза зарядки для здоровья", image: "/placeholder.svg" },
    { title: "Мифы Древней Греции", image: "/placeholder.svg" },
    { title: "Изменения в потреблении продуктов питания", image: "/placeholder.svg" },
    { title: "Основные цели маркетинговых исследований", image: "/placeholder.svg" },
    { title: "История Берлина", image: "/placeholder.svg" },
  ];

  const presentationsRow3: Presentation[] = [
    { title: "Нейроструктурный анализ", image: "/placeholder.svg" },
    { title: "Социализация", image: "/placeholder.svg" },
    { title: "Культурные аттракционы", image: "/placeholder.svg" },
    { title: "Принципы городской застройки", image: "/placeholder.svg" },
    { title: "Анализ потребительского спроса", image: "/placeholder.svg" },
  ];

  return (
    <section className="py-12 md:py-20 overflow-hidden bg-white">
      <div className="container px-4 md:px-6 mb-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Примеры презентаций
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Создайте подобные презентации за считанные минуты
          </p>
        </div>
      </div>

      {/* Первый ряд (слева направо) */}
      <div 
        ref={el => rowsRef.current[0] = el} 
        className="flex space-x-5 mb-6 animate-left-to-right"
      >
        {presentationsRow1.map((item, index) => (
          <div key={index} className="flex-none w-64 md:w-80 rounded-lg overflow-hidden shadow-md bg-card">
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

      {/* Второй ряд (справа налево) */}
      <div 
        ref={el => rowsRef.current[1] = el} 
        className="flex space-x-5 mb-6 animate-right-to-left"
      >
        {presentationsRow2.map((item, index) => (
          <div key={index} className="flex-none w-64 md:w-80 rounded-lg overflow-hidden shadow-md bg-card">
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

      {/* Третий ряд (слева направо) */}
      <div 
        ref={el => rowsRef.current[2] = el} 
        className="flex space-x-5 animate-left-to-right"
      >
        {presentationsRow3.map((item, index) => (
          <div key={index} className="flex-none w-64 md:w-80 rounded-lg overflow-hidden shadow-md bg-card">
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
    </section>
  );
};

export default AnimatedPresentations;
