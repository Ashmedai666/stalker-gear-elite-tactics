import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  catalog: [
    { name: 'Одежда', href: '/catalog/clothing' },
    { name: 'Обувь', href: '/catalog/footwear' },
    { name: 'Рюкзаки', href: '/catalog/backpacks' },
    { name: 'Защита', href: '/catalog/protection' },
    { name: 'Аксессуары', href: '/catalog/accessories' },
  ],
  company: [
    { name: 'О нас', href: '/about' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/contacts' },
    { name: 'Карьера', href: '/careers' },
  ],
  support: [
    { name: 'Доставка и оплата', href: '/delivery' },
    { name: 'Гарантия и возврат', href: '/warranty' },
    { name: 'Размерная сетка', href: '/sizes' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Л</span>
              </div>
              <span className="text-foreground font-semibold text-lg tracking-tight">
                ЛЕГИОН-ТИГР
              </span>
            </Link>
            
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Премиальное тактическое снаряжение для профессионалов. 
              Качество, проверенное временем.
            </p>

            <div className="mb-6">
              <h4 className="text-foreground font-medium mb-3 text-sm">Подпишитесь на новости</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-background border-border"
                />
                <Button size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Каталог</h4>
            <ul className="space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contacts */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Поддержка</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-4 border-t border-border">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Phone className="h-4 w-4" />
                8 (800) 123-45-67
              </a>
              <a href="mailto:info@legion-tigr.ru" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@legion-tigr.ru
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Москва, ул. Примерная, 1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ЛЕГИОН-ТИГР. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
