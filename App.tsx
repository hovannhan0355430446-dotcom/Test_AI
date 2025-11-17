import React, { useState } from 'react';
import MainHeader from './components/layout/MainHeader';
import SubHeader from './components/layout/SubHeader';
import LeftToolbar from './components/layout/LeftToolbar';
import RightSidebar from './components/layout/RightSidebar';
import CanvasArea from './components/layout/CanvasArea';
import UploadPrompt from './components/UploadPrompt';
import EditorCanvas from './components/EditorCanvas';
import WelcomePage from './components/WelcomePage';
import ChatbotPage from './components/chatbot/ChatbotPage';

export interface AdjustmentsState {
  exposure: number;
  contrast: number;
  highlights: number;
}


const App: React.FC = () => {
  const [view, setView] = useState<'welcome' | 'editor' | 'chatbot'>('welcome');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [zoom, setZoom] = useState<number>(100);
  const [adjustments, setAdjustments] = useState<AdjustmentsState>({
    exposure: 0,
    contrast: 0,
    highlights: 0,
  });

  const handleImageUpload = (file: File) => {
    setImageFile(file);
    setZoom(100);
    // Reset adjustments when a new image is uploaded
     setAdjustments({
      exposure: 0,
      contrast: 0,
      highlights: 0,
    });
    setView('editor');
  };
  
  const handleExport = () => {
    // Logic xuất ảnh sẽ được thêm vào đây
    alert('Chức năng xuất ảnh chưa được triển khai.');
  }

  const handleGoToWelcome = () => {
    setView('welcome');
    setImageFile(null);
  };
  
  const handleGoToChatbot = () => {
    setView('chatbot');
  }

  const handleAdjustmentChange = (
    adjustment: keyof AdjustmentsState,
    value: number
  ) => {
    setAdjustments((prev) => ({ ...prev, [adjustment]: value }));
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 300));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 10));
  };

  if (view === 'welcome') {
    return <WelcomePage onImageUpload={handleImageUpload} onGoToChatbot={handleGoToChatbot} />;
  }
  
  if (view === 'chatbot') {
    return <ChatbotPage onGoToWelcome={handleGoToWelcome} onImageUpload={handleImageUpload} />;
  }


  return (
    <div className="min-h-screen flex flex-col bg-editor-bg">
      <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_1fr] h-screen">
        <MainHeader onGoToWelcome={handleGoToWelcome} />
        <SubHeader 
          fileName={imageFile?.name} 
          onExport={handleExport}
          zoom={zoom}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />
        <LeftToolbar />
        <CanvasArea>
          {imageFile ? (
            <EditorCanvas 
              imageFile={imageFile} 
              adjustments={adjustments}
              zoom={zoom}
            />
          ) : (
            <UploadPrompt onImageUpload={handleImageUpload} />
          )}
        </CanvasArea>
        <RightSidebar 
          adjustments={adjustments}
          onAdjustmentChange={handleAdjustmentChange}
        />
      </div>
    </div>
  );
};

export default App;