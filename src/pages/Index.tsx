import React from 'react';
import PricingCard from '../components/PricingCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { Play, Tv, Smartphone, Monitor, Film, List, Video, Lock, PlaySquare, Apple, Tv2 } from 'lucide-react';

const Index = () => {
  const handleSubscribeYearly = () => {
    window.open('https://api.whatsapp.com/send/?phone=%2B17027602707&text=%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83+%D8%B3%D8%A8%D8%A7%D9%8A%D8%AF%D8%B1+%D8%B3%D9%86%D8%A9', '_blank');
  };

  const handleSubscribeHalfYearly = () => {
    window.open('https://api.whatsapp.com/send/?phone=%2B17027602707&text=%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83+%D8%B3%D8%A8%D8%A7%D9%8A%D8%AF%D8%B1+6+%D8%A3%D8%B4%D9%87%D8%B1', '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f30303' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white px-4">
        <div className="text-center">
          <div className="bg-white rounded-full p-4 w-fit mx-auto mb-8">
            <img 
              src="https://saleshulk.com/wp-content/uploads/2024/10/1-1.png" 
              alt="Spider TV Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Spider TV</h1>
          <p className="text-xl md:text-2xl mb-8">اقوى مشغل ميديا فى العالم لتشغيل كل البث المباشر مع مكتبات الافلام والمسلسلات</p>
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

      {/* Why Spider TV Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">لماذا Spider TV</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors">
              <Film className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">أفلام</h3>
              <p>تشغيل كل الافلام بجميع الصيغ واللغات والترجمات</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors">
              <Tv className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">مسلسلات</h3>
              <p>تشغيل كل مواسم المسلسلات بكل اللغات</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors">
              <List className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">قائمة المفضلة</h3>
              <p>امكانية عمل اكثر من مفضله للقنوات</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors">
              <Video className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">تسجيل البث المباشر</h3>
              <p>التسجيل من البث المباشر</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">غلق باقات</h3>
              <p>امكانية قفل القنوات وباقات الافلام والمسلسلات</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors">
              <PlaySquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">تشغيل التطبيق اتوماتيك</h3>
              <p>تشغيل التطبيق اتوماتيك على قناه بضغطه واحده (لكبار السن)</p>
            </div>
          </div>
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
            onClick={handleSubscribeHalfYearly}
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
            onClick={handleSubscribeYearly}
            image="https://saleshulk.com/wp-content/uploads/2024/10/D-1000x1000.jpg"
          />
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">التطبيقات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href="https://apps.apple.com/us/app/the-spider-hd/id1458565575" 
              target="_blank" 
              className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors"
            >
              <Apple className="w-16 h-16 mb-4" />
              <span className="text-xl font-bold">App Store</span>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.sp_playermm.app" 
              target="_blank" 
              className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors"
            >
              <Smartphone className="w-16 h-16 mb-4" />
              <span className="text-xl font-bold">Google Play</span>
            </a>
            <a 
              href="https://www.samsung.com/us/appstore/app.do?appId=G21131016992" 
              target="_blank" 
              className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-8 rounded-xl text-white text-center hover:bg-white/80 transition-colors"
            >
              <Tv2 className="w-16 h-16 mb-4" />
              <span className="text-xl font-bold">Samsung Store</span>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;