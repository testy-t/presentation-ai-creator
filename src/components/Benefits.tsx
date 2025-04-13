import { Clock, Zap, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Экономия времени",
      description: "Создавайте качественные презентации за минуты вместо часов ручной работы"
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Профессиональный дизайн",
      description: "ИИ подбирает оптимальные шаблоны и стили на основе вашей темы"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Интеллектуальная структура",
      description: "Система автоматически формирует логичную структуру презентации и ключевые тезисы"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Преимущества Сократика
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Почему наш ИИ лучше ручного создания презентаций
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
