import React from 'react';
import PricingCard from '../components/PricingCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { Play, Tv, Smartphone, Monitor } from 'lucide-react';

const Index = () => {
  const handleSubscribe = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spider-primary to-spider-secondary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white px-4">
        <div className="text-center">
          <img 
            src="https://saleshulk.com/wp-content/uploads/2024/10/1-1.png" 
            alt="Spider TV Logo" 
            className="w-48 h-48 mx-auto mb-8 object-contain"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Spider TV</h1>
          <p className="text-xl md:text-2xl mb-8">شاهد أفضل الأفلام والمسلسلات والبث المباشر</p>
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Tv className="h-6 w-6" />
              <span>تلفاز</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-6 w-6" />
              <span>موبايل</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="h-6 w-6" />
              <span>كمبيوتر</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-spider-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-opacity"
          >
            اشترك الآن
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">اختر خطتك</h2>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-4xl">
          <PricingCard
            title="اشتراك نصف سنوي"
            price={13}
            period="6 أشهر"
            features={[
              "مشاهدة غير محدودة",
              "جودة عالية",
              "دعم جميع الأجهزة",
              "بث مباشر",
            ]}
            onClick={handleSubscribe}
            image="https://saleshulk.com/wp-content/uploads/2024/10/1-1000x1000.jpg"
          />
          <PricingCard
            title="اشتراك سنوي"
            price={20}
            period="سنة"
            features={[
              "مشاهدة غير محدودة",
              "جودة عالية",
              "دعم جميع الأجهزة",
              "بث مباشر",
              "خصم 25%",
            ]}
            onClick={handleSubscribe}
            image="https://saleshulk.com/wp-content/uploads/2024/10/D-1000x1000.jpg"
          />
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;