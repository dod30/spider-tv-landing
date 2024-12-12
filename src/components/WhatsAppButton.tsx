import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // رقم الواتساب الخاص بكم

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
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