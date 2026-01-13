import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, Footprints, Backpack, Shield, Watch } from 'lucide-react';

const categories = [
  {
    id: 'clothing',
    name: 'Одежда',
    description: 'Куртки, костюмы, брюки',
    icon: Shirt,
    count: 156,
    href: '/catalog/clothing',
  },
  {
    id: 'footwear',
    name: 'Обувь',
    description: 'Берцы, ботинки, кроссовки',
    icon: Footprints,
    count: 84,
    href: '/catalog/footwear',
  },
  {
    id: 'backpacks',
    name: 'Рюкзаки',
    description: 'Тактические, патрульные, штурмовые',
    icon: Backpack,
    count: 67,
    href: '/catalog/backpacks',
  },
  {
    id: 'protection',
    name: 'Защита',
    description: 'Бронежилеты, шлемы, наколенники',
    icon: Shield,
    count: 43,
    href: '/catalog/protection',
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    description: 'Часы, ножи, фонари',
    icon: Watch,
    count: 128,
    href: '/catalog/accessories',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Категории
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Полный спектр тактического снаряжения для любых задач
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            Весь каталог
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={category.href}
                className="group relative bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-foreground font-semibold text-lg mb-1">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>

                {/* Count */}
                <span className="text-muted-foreground text-xs">
                  {category.count} товаров
                </span>

                {/* Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
