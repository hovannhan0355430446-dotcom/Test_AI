import React from 'react';
import { HomeIcon } from '../icons/HomeIcon';

interface MainHeaderProps {
  onGoToWelcome: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onGoToWelcome }) => {
  return (
    <header className="col-span-3 bg-panel-header border-b border-gray-700 px-4 py-1.5 flex items-center text-xs text-gray-300">
      <button 
        onClick={onGoToWelcome} 
        title="Trang chính" 
        className="mr-4 p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      >
        <HomeIcon className="w-5 h-5" />
      </button>
      <span className="font-bold mr-6 text-white">Trình chỉnh sửa ảnh</span>
      <nav className="flex items-center space-x-4">
        <button className="hover:text-white">File</button>
        <button className="hover:text-white">Edit</button>
        <button className="hover:text-white">View</button>
        <button className="hover:text-white">Help</button>
      </nav>
    </header>
  );
};

export default MainHeader;