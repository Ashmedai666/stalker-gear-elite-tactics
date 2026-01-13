import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Готовы к следующей
            <span className="text-gradient"> миссии?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 50 000+ профессионалов, которые уже доверили свою экипировку нам. 
            Первая покупка — скидка 10%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-base px-8 h-14 shadow-glow">
              Начать покупки
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-14 border-border/50 hover:bg-muted/50">
              Связаться с нами
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm mb-4">Нам доверяют</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="h-8 w-24 bg-muted rounded" />
              <div className="h-8 w-28 bg-muted rounded" />
              <div className="h-8 w-20 bg-muted rounded" />
              <div className="h-8 w-32 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
