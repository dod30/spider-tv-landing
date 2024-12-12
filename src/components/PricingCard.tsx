import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  period: string;
  onClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  period,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
      <h3 className="text-2xl font-bold text-spider-primary mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-green-500 h-5 w-5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onClick}
        className="w-full py-3 px-4 bg-gradient-to-r from-spider-primary to-spider-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        اشترك الآن
      </button>
    </div>
  );
};

export default PricingCard;