import React, { useState } from 'react';

interface IngredientItemProps {
  text: string;
}

export const IngredientItem: React.FC<IngredientItemProps> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li
      className="flex items-center gap-4 my-1 cursor-pointer transition-colors duration-200 hover:bg-white/5 rounded-lg p-3 group"
      onClick={handleToggle}
    >
      <div className={`w-5 h-5 border-2 rounded-md flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isChecked ? 'bg-red-600 border-red-600 scale-110' : 'border-gray-600 group-hover:border-red-500'}`}>
        <svg className={`w-3 h-3 text-white transition-opacity duration-200 ${isChecked ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={`text-gray-300 transition-all duration-300 ${isChecked ? 'line-through text-gray-500' : 'group-hover:text-gray-100'}`}>
        {text}
      </span>
    </li>
  );
};