import React from 'react';
import { MousePointerIcon } from '../icons/MousePointerIcon';
import { CropIcon } from '../icons/CropIcon';
import { WandIcon } from '../icons/WandIcon';
import { TypeIcon } from '../icons/TypeIcon';
import { BrushIcon } from '../icons/BrushIcon';

interface ToolbarButtonProps {
  children: React.ReactNode;
  label: string;
  active?: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ children, label, active }) => (
  <button title={label} className={`p-3 rounded-md transition-colors ${active ? 'text-primary' : 'text-gray-400 hover:text-white'}`}>
    {children}
  </button>
);

const LeftToolbar: React.FC = () => {
  return (
    <aside className="row-span-1 bg-panel-header border-r border-gray-700 p-2 flex flex-col items-center space-y-2">
      <ToolbarButton label="Select" active>
        <MousePointerIcon className="w-6 h-6" />
      </ToolbarButton>
      <ToolbarButton label="Crop">
        <CropIcon className="w-6 h-6" />
      </ToolbarButton>
      <ToolbarButton label="Adjustments">
        <WandIcon className="w-6 h-6" />
      </ToolbarButton>
      <ToolbarButton label="Text">
        <TypeIcon className="w-6 h-6" />
      </ToolbarButton>
      <ToolbarButton label="Brush">
        <BrushIcon className="w-6 h-6" />
      </ToolbarButton>
    </aside>
  );
};

export default LeftToolbar;