import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Presentation {
  title: string;
  image: string;
}

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  
  const handleCreatePresentation = () => {
    if (prompt.trim()) {
      // При реальной реализации здесь будет обработка промпта
      // Сейчас просто прокручиваем к форме
      document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
      
      // Можно было бы также автоматически заполнить тему презентации в форме
      console.log("Создание презентации с промптом:", prompt);
    }
  };

  // Первый ряд презентаций (нижний ряд, но поверх второго)
  const presentationsRow1: Presentation[] = [
    { title: "Принципы дизайна", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.06abbbc9.png&w=640&q=75" },
    { title: "Концепции развития", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.0f5cccb3.png&w=640&q=75" },
    { title: "Научные аспекты", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.4c84a6e8.png&w=640&q=75" },
    { title: "Этапы исследований", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.d7762416.png&w=640&q=75" },
    { title: "Методы сбора данных", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.64a436b7.png&w=640&q=75" },
    { title: "Анализ рынка", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.03039df5.png&w=640&q=75" },
  ];

  // Второй ряд презентаций (средний ряд)
  const presentationsRow2: Presentation[] = [
    { title: "Бизнес-планирование", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.da6903cc.png&w=640&q=75" },
    { title: "Мифы и легенды", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.cf04a718.png&w=640&q=75" },
    { title: "Потребительский анализ", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.ff453b1a.png&w=640&q=75" },
    { title: "Маркетинговые цели", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.68627d00.png&w=640&q=75" },
    { title: "История культуры", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.11ba1da0.png&w=640&q=75" },
    { title: "Стратегии компании", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F13.f4c64096.png&w=640&q=75" },
  ];

  // Третий ряд презентаций (верхний ряд, но под всеми)
  const presentationsRow3: Presentation[] = [
    { title: "Нейронные сети", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F14.c51d1164.png&w=640&q=75" },
    { title: "Социальная адаптация", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F15.b839be77.png&w=640&q=75" },
    { title: "Культурное наследие", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F16.904b1012.png&w=640&q=75" },
    { title: "Городское планирование", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.3e3b9c50.png&w=640&q=75" },
    { title: "Потребительский спрос", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.13ecd18c.png&w=640&q=75" },
    { title: "Бизнес-аналитика", image: "https://sokratic.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite.7cf67873.webp&w=3840&q=75" },
  ];

  // Дублирование элементов для бесконечной прокрутки
  const duplicateItems = (items: Presentation[]) => [...items, ...items];
  
  const row1Items = duplicateItems(presentationsRow1);
  const row2Items = duplicateItems(presentationsRow2);
  const row3Items = duplicateItems(presentationsRow3);

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Анимированные презентации как фон */}
      <div className="presentations-container">
        {/* Третий ряд - сверху, но под всеми, движется вправо */}
        <div className="presentations-row presentations-row-3 slide-right">
          {row3Items.map((item, index) => (
            <div key={`row3-${index}`} className="flex-none w-64 md:w-80 mx-2 rounded-lg overflow-hidden shadow-xl">
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
            <div key={`row2-${index}`} className="flex-none w-64 md:w-80 mx-2 rounded-lg overflow-hidden shadow-xl">
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

        {/* Первый ряд - снизу, но поверх всех, движется вправо */}
        <div className="presentations-row presentations-row-1 slide-right">
          {row1Items.map((item, index) => (
            <div key={`row1-${index}`} className="flex-none w-64 md:w-80 mx-2 rounded-lg overflow-hidden shadow-xl">
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

      {/* Основной контент Hero поверх анимации */}
      <div className="relative z-40 h-full flex items-center">
        <div className="container px-4 md:px-6">
          <div className="backdrop-blur-xl bg-white/60 p-8 md:p-12 rounded-xl max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center">
                <img 
                  src="https://sokratic.ru/favicon.ico" 
                  alt="Логотип Сократик" 
                  className="h-10 md:h-12 mr-3"
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
                  Сократик
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-800 max-w-[800px]">
                Создавайте профессиональные презентации с помощью искусственного интеллекта
              </p>
              
              {/* Поле для ввода промпта */}
              <div className="w-full max-w-2xl mt-4">
                <div className="relative">
                  <Input
                    className="pr-12 py-6 text-lg shadow-md focus-visible:ring-primary"
                    placeholder="Опишите тему презентации..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleCreatePresentation();
                      }
                    }}
                  />
                  <Button 
                    className="absolute right-1 top-1 h-10 w-10 rounded-full p-0"
                    onClick={handleCreatePresentation}
                    disabled={!prompt.trim()}
                  >
                    <ArrowRight className="h-5 w-5" />
                    <span className="sr-only">Создать презентацию</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Например: "Стратегия развития компании на 2023 год" или "История искусства Ренессанса"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button variant="outline" className="font-medium" onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                </Button>
                <Button variant="outline" className="font-medium" onClick={() => document.getElementById('testimonials-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Отзывы клиентов
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
