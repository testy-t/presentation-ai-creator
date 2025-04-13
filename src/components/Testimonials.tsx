import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Михаил Проценко",
      role: "Маркетолог",
      content: "Сократик сэкономил мне часы работы! Создал презентацию для клиента за 10 минут, которая получила восторженные отзывы.",
      avatar: "/placeholder.svg",
      initials: "МП"
    },
    {
      name: "Анна Светлова",
      role: "Преподаватель",
      content: "Теперь готовлю материалы для лекций в 3 раза быстрее. Студенты отмечают, что презентации стали намного понятнее и структурированнее.",
      avatar: "/placeholder.svg",
      initials: "АС"
    },
    {
      name: "Дмитрий Волков",
      role: "Предприниматель",
      content: "Благодаря Сократику выиграл тендер! Презентация выглядела настолько профессионально, что выделилась среди других предложений.",
      avatar: "/placeholder.svg",
      initials: "ДВ"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Отзывы клиентов
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Что говорят пользователи Сократика
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground flex-grow">"{testimonial.content}"</p>
                <div className="mt-4 flex">
                  {'★★★★★'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
