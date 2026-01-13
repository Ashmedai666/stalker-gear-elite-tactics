import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Тактический рюкзак "Призрак" 45L',
    price: 18900,
    oldPrice: 22900,
    image: '/placeholder.svg',
    category: 'Рюкзаки',
    isNew: true,
    href: '/product/1',
  },
  {
    id: 2,
    name: 'Куртка Softshell "Страж"',
    price: 12500,
    image: '/placeholder.svg',
    category: 'Одежда',
    isNew: true,
    href: '/product/2',
  },
  {
    id: 3,
    name: 'Берцы тактические "Гранит"',
    price: 14900,
    image: '/placeholder.svg',
    category: 'Обувь',
    isNew: true,
    href: '/product/3',
  },
  {
    id: 4,
    name: 'Тактические перчатки "Штурм"',
    price: 3900,
    image: '/placeholder.svg',
    category: 'Аксессуары',
    isNew: false,
    href: '/product/4',
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price);
}

export function NewArrivalsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Новые поступления
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Свежие поставки от ведущих производителей тактического снаряжения
            </p>
          </div>
          <Link 
            to="/new" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            Все новинки
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article 
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <Link to={product.href} className="relative block aspect-square bg-muted overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Новинка
                    </span>
                  )}
                  {product.oldPrice && (
                    <span className="bg-destructive text-destructive-foreground text-xs font-medium px-3 py-1 rounded-full">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Add */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Button className="w-full gap-2" size="sm">
                    <ShoppingBag className="h-4 w-4" />
                    В корзину
                  </Button>
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">
                  {product.category}
                </span>
                <Link to={product.href}>
                  <h3 className="text-foreground font-medium mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-semibold text-lg">
                    {formatPrice(product.price)} ₽
                  </span>
                  {product.oldPrice && (
                    <span className="text-muted-foreground text-sm line-through">
                      {formatPrice(product.oldPrice)} ₽
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
