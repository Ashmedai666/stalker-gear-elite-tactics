import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Как выбрать тактический рюкзак: полное руководство',
    excerpt: 'Разбираем ключевые характеристики: объем, материалы, система подвески и совместимость с MOLLE.',
    image: '/placeholder.svg',
    category: 'Гайды',
    readTime: 8,
    date: '12 января 2026',
    href: '/blog/how-to-choose-tactical-backpack',
  },
  {
    id: 2,
    title: 'Cordura vs Rip-Stop: битва материалов',
    excerpt: 'Сравниваем два самых популярных материала для тактического снаряжения. Что выбрать и когда?',
    image: '/placeholder.svg',
    category: 'Технологии',
    readTime: 5,
    date: '8 января 2026',
    href: '/blog/cordura-vs-ripstop',
  },
  {
    id: 3,
    title: 'Новая коллекция весна 2026: обзор',
    excerpt: 'Первый взгляд на новинки сезона от ведущих производителей тактического снаряжения.',
    image: '/placeholder.svg',
    category: 'Новости',
    readTime: 4,
    date: '5 января 2026',
    href: '/blog/spring-2026-collection',
  },
];

export function BlogSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Блог и статьи
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Экспертный контент о тактическом снаряжении и его применении
            </p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            Все статьи
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <Link to={article.href} className="relative block aspect-[16/10] bg-muted overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </Link>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime} мин
                  </span>
                </div>
                
                <Link to={article.href}>
                  <h3 className="text-foreground font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <Link 
                  to={article.href}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium group/link"
                >
                  Читать далее
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
