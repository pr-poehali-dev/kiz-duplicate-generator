import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scanning, setScanning] = useState(false);
  const [code, setCode] = useState('');

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 liquid-gradient opacity-10" />
        
        {/* Floating Glass Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 glass-card animate-liquid-float opacity-30" />
        <div className="absolute bottom-20 right-20 w-24 h-24 glass-card animate-liquid-float opacity-20" style={{animationDelay: '1s'}} />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Logo */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 glass-card animate-glass-glow">
            <Icon name="QrCode" size={32} className="text-glass-blue" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-sf font-bold mb-6 bg-gradient-to-r from-glass-blue via-glass-purple to-glass-pink bg-clip-text text-transparent">
            2КИЗ
          </h1>
          
          <p className="text-2xl md:text-3xl font-sf-text font-light text-slate-700 mb-4">
            Дублируйте КИЗ за секунды
          </p>
          
          <p className="text-xl font-sf-text text-slate-600 mb-12">
            Бесплатно. Мгновенно. Без регистрации.
          </p>
          
          {/* CTA Button */}
          <Button 
            className="glass-button text-lg py-6 px-12 animate-glass-glow"
            onClick={() => document.getElementById('scanner')?.scrollIntoView({behavior: 'smooth'})}
          >
            Попробовать бесплатно
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Scanner Section */}
      <section id="scanner" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-sf font-semibold text-slate-800 mb-4">
              Сканировать DataMatrix
            </h2>
            <p className="text-lg text-slate-600 font-sf-text">
              Загрузите изображение или введите код вручную
            </p>
          </div>
          
          <Card className="glass-card p-8 relative overflow-hidden">
            {scanning && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glass-blue/20 to-transparent animate-scan-wave" />
            )}
            
            <div className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-glass-blue transition-colors cursor-pointer">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-slate-400" />
                <p className="text-lg font-sf-text text-slate-600 mb-2">
                  Перетащите изображение или нажмите для выбора
                </p>
                <p className="text-sm text-slate-500">PNG, JPG до 10MB</p>
              </div>
              
              <div className="text-center text-slate-400 font-sf-text">или</div>
              
              {/* Manual Input */}
              <div className="space-y-4">
                <Input
                  placeholder="Введите код DataMatrix вручную"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="text-lg py-4 glass-card border-0"
                />
                
                <Button 
                  onClick={handleScan} 
                  disabled={scanning}
                  className="w-full glass-button text-lg py-4"
                >
                  {scanning ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Сканирование...
                    </>
                  ) : (
                    <>
                      <Icon name="Scan" size={20} className="mr-2" />
                      Сгенерировать дубликат
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sf font-semibold text-slate-800 mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-slate-600 font-sf-text">
              Три простых шага до готового дубликата
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ScanLine",
                title: "Считать код",
                description: "Загрузите фото или введите DataMatrix код вручную",
                step: "01"
              },
              {
                icon: "Printer",
                title: "Распечатать",
                description: "Получите готовый дубликат для печати в высоком качестве",
                step: "02"
              },
              {
                icon: "Sticker",
                title: "Наклеить",
                description: "Приклейте новый код на товар — готово!",
                step: "03"
              }
            ].map((step, index) => (
              <Card key={index} className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto glass-card flex items-center justify-center animate-liquid-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <Icon name={step.icon as any} size={28} className="text-glass-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-glass-purple to-glass-pink rounded-full flex items-center justify-center text-white text-sm font-sf font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-sf font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-sf-text">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sf font-semibold text-slate-800 mb-4">
              Почему выбирают 2КИЗ
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Wallet",
                title: "Бесплатно",
                description: "Никаких скрытых платежей. Генерируйте сколько угодно дубликатов КИЗ",
                gradient: "from-green-400 to-emerald-500"
              },
              {
                icon: "Zap",
                title: "Мгновенно",
                description: "Результат за секунды. Без очередей и ожидания",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: "UserX",
                title: "Без регистрации",
                description: "Начните работу сразу. Никаких форм и личных данных",
                gradient: "from-purple-400 to-pink-500"
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 group-hover:animate-liquid-float`}>
                  <Icon name={benefit.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-sf font-semibold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-sf-text">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="QrCode" size={24} className="text-glass-blue mr-3" />
              <span className="text-2xl font-sf font-bold text-white">2КИЗ</span>
            </div>
            
            <div className="flex items-center space-x-6 text-slate-400 font-sf-text">
              <span>© 2024 2КИЗ</span>
              <span>•</span>
              <span>Генератор дубликатов КИЗ</span>
            </div>
          </div>
          
          {/* Liquid dock effect */}
          <div className="mt-8 h-1 liquid-gradient rounded-full opacity-50" />
        </div>
      </footer>
    </div>
  );
};

export default Index;