import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Сократик
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px]">
            Создавайте профессиональные презентации с помощью искусственного интеллекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="font-medium" onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Создать презентацию
            </Button>
            <Button size="lg" variant="outline" className="font-medium" onClick={() => document.getElementById('examples-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
