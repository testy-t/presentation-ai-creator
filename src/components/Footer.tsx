const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © 2023 Сократик. Все права защищены.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
