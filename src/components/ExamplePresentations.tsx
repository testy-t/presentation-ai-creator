import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ExamplePresentationsProps {
  id?: string;
}

const ExamplePresentations = ({ id }: ExamplePresentationsProps) => {
  const examples = [
    {
      title: "Бизнес-стратегия 2023",
      image: "/placeholder.svg",
      slides: 12,
      topic: "Бизнес"
    },
    {
      title: "История искусств",
      image: "/placeholder.svg",
      slides: 15,
      topic: "Образование"
    },
    {
      title: "Технологические тренды",
      image: "/placeholder.svg",
      slides: 10,
      topic: "Технологии"
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Примеры презентаций
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Вот что может создать Сократик для вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="object-cover w-full h-full" 
                    />
                  </AspectRatio>
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                    {example.slides} слайдов
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{example.topic}</div>
                  <h3 className="text-xl font-medium">{example.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplePresentations;
