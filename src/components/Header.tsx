import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Главная", href: "/" },
    { title: "Примеры", href: "#examples-section" },
    { title: "Преимущества", href: "#benefits-section" },
    { title: "Отзывы", href: "#testimonials-section" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Сократик</span>
          </Link>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="default" 
            className="hidden md:inline-flex"
            onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Создать презентацию
          </Button>

          {/* Мобильное меню */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-6">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">Сократик</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Закрыть меню</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="text-base font-medium text-muted-foreground"
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          setIsOpen(false);
                          document.querySelector(item.href)?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                  <Button 
                    variant="default"
                    className="mt-4"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Создать презентацию
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
