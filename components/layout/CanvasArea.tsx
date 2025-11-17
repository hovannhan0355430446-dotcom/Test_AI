import React from 'react';

interface CanvasAreaProps {
  children: React.ReactNode;
}

const CanvasArea: React.FC<CanvasAreaProps> = ({ children }) => {
  const checkerboardStyle = {
    backgroundImage: `
      linear-gradient(45deg, #2d3748 25%, transparent 25%),
      linear-gradient(-45deg, #2d3748 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #2d3748 75%),
      linear-gradient(-45deg, transparent 75%, #2d3748 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
  };

  return (
    <main 
      className="bg-editor-bg flex items-center justify-center overflow-auto p-8"
      style={checkerboardStyle}
    >
      {children}
    </main>
  );
};

export default CanvasArea;