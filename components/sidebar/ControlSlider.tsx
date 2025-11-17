import React from 'react';
import { ResetIcon } from '../icons/ResetIcon';

interface ControlSliderProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  min?: number;
  max?: number;
  step?: number;
  displayValue?: string;
}

const ControlSlider: React.FC<ControlSliderProps> = ({
  label,
  value,
  onChange,
  onReset,
  min = -100,
  max = 100,
  step = 1,
  displayValue,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <label className="text-xs font-medium text-gray-200">{label}</label>
        <div className="flex items-center">
            <input 
                type="text" 
                readOnly
                value={displayValue ?? value} 
                className="w-12 text-right bg-transparent text-xs font-mono text-gray-200 focus:outline-none pointer-events-none"
            />
            <button onClick={onReset} title="Reset" className="ml-2 text-gray-400 hover:text-white">
                <ResetIcon className="w-3 h-3" />
            </button>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #9ca3af ${percentage}%, #4b5563 ${percentage}%)`
        }}
      />
    </div>
  );
};

export default ControlSlider;