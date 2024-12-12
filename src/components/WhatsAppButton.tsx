import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "17027602707"; // رقم الواتساب الخاص بكم

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text=%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83+%D8%B3%D8%A8%D8%A7%D9%8A%D8%AF%D8%B1+%D8%B3%D9%86%D8%A9`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors animate-float flex items-center gap-2"
    >
      <MessageCircle className="h-6 w-6" />
      <span>اشتراك سبايدر</span>
    </button>
  );
};

export default WhatsAppButton;