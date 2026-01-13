import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-30 bg-noise" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground text-sm font-medium">Новая коллекция 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Снаряжение,</span>
              <br />
              <span className="text-gradient">которому доверяют</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Премиальное тактическое снаряжение для профессионалов. 
              Каждый элемент создан с заботой о вашей безопасности и комфорте.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="group text-base px-8 h-14 shadow-glow">
                Смотреть каталог
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-14 border-border/50 hover:bg-muted/50">
                Узнать историю
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
                <div className="text-muted-foreground text-sm">Лет опыта</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">50K+</div>
                <div className="text-muted-foreground text-sm">Клиентов</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">99%</div>
                <div className="text-muted-foreground text-sm">Довольны</div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-3xl border border-border/50 overflow-hidden h-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
                    <svg className="w-16 h-16 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Флагманский продукт
                  </p>
                  <h3 className="text-foreground font-semibold mt-2">
                    Тактический рюкзак "Призрак"
                  </h3>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                Бестселлер
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
