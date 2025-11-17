import React from 'react';
import { ZoomInIcon } from '../icons/ZoomInIcon';
import { ZoomOutIcon } from '../icons/ZoomOutIcon';

interface SubHeaderProps {
  fileName?: string;
  onExport: () => void;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({ fileName = 'project-01.jpg', onExport, zoom, onZoomIn, onZoomOut }) => {
  return (
    <div className="col-span-3 bg-editor-bg border-b border-gray-700 px-4 py-2 flex justify-between items-center text-gray-400">
      <div className="flex-1"></div>
      <div className="flex-1 text-center">{fileName}</div>
      <div className="flex-1 flex justify-end items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button onClick={onZoomOut} className="p-1 hover:text-white"><ZoomOutIcon className="w-5 h-5" /></button>
          <span className="w-12 text-center">{zoom}%</span>
          <button onClick={onZoomIn} className="p-1 hover:text-white"><ZoomInIcon className="w-5 h-5" /></button>
        </div>
        <button 
          onClick={onExport}
          className="px-4 py-1.5 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors duration-200 font-semibold"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default SubHeader;