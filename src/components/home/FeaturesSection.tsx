import { Truck, Shield, RotateCcw, Headphones, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставка по России от 1 дня. Бесплатно от 15 000 ₽',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Только оригинальная продукция от проверенных поставщиков',
  },
  {
    icon: RotateCcw,
    title: 'Простой возврат',
    description: '30 дней на возврат без вопросов и лишних формальностей',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Консультация экспертов по подбору снаряжения',
  },
  {
    icon: Award,
    title: 'Проверено в поле',
    description: 'Всё снаряжение протестировано в реальных условиях',
  },
  {
    icon: Clock,
    title: '10 лет опыта',
    description: 'Работаем с 2014 года. Более 50 000 довольных клиентов',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы — не просто магазин. Мы команда профессионалов, которые понимают ваши задачи
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group text-center p-6 rounded-2xl hover:bg-background/50 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
