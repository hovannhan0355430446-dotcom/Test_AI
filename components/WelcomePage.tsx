import React, { useCallback, useRef } from 'react';
import { EditIcon } from './icons/EditIcon';
import { ChatIcon } from './icons/ChatIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { MarioEditorIcon } from './icons/MarioEditorIcon';
import { SuperMushroomIcon } from './icons/SuperMushroomIcon';
import { FireFlowerIcon } from './icons/FireFlowerIcon';
import { SuperStarIcon } from './icons/SuperStarIcon';

interface WelcomePageProps {
  onImageUpload: (file: File) => void;
  onGoToChatbot: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onImageUpload, onGoToChatbot }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      onImageUpload(event.dataTransfer.files[0]);
    }
  }, [onImageUpload]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <main 
      className="min-h-screen w-full flex flex-col items-center justify-center text-center p-8 bg-editor-bg text-gray-300 welcome-background relative overflow-hidden"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
       <div className="absolute top-8 left-8 text-left z-20 bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-rainbow-gradient bg-200% animate-rainbow-text-flow [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.7))]">It's me Mario</h2>
        <p className="text-sm text-transparent bg-clip-text bg-rainbow-gradient bg-200% animate-rainbow-text-flow [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.7))]">Trình chỉnh sửa ảnh thế hệ mới.<br/>Cung cấp bởi Gemini.</p>
      </div>

      <div className="absolute top-8 right-8 z-20 bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
        <div className="flex items-center gap-4">
            <SuperMushroomIcon className="w-10 h-10 animate-float" style={{ animationDelay: '0s' }} />
            <FireFlowerIcon className="w-10 h-10 animate-float" style={{ animationDelay: '0.5s' }} />
            <SuperStarIcon className="w-10 h-10 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>


      {/* Corner Glows */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute -top-80 -left-80 w-[50rem] h-[50rem] opacity-20 blur-3xl animate-spin-slow"
          style={{
            background: `conic-gradient(from 90deg at 50% 50%, #ef4444 0%, #f97316 25%, transparent 50%, transparent 100%)`
          }}
        />
        <div 
          className="absolute -top-80 -right-80 w-[50rem] h-[50rem] opacity-20 blur-3xl animate-spin-slow"
          style={{
            animationDelay: '2.5s',
            background: `conic-gradient(from 180deg at 50% 50%, #eab308 0%, #22c55e 25%, transparent 50%, transparent 100%)`
          }}
        />
        <div 
          className="absolute -bottom-80 -left-80 w-[50rem] h-[50rem] opacity-20 blur-3xl animate-spin-slow"
          style={{
            animationDelay: '5s',
            background: `conic-gradient(from 270deg at 50% 50%, #06b6d4 0%, #3b82f6 25%, transparent 50%, transparent 100%)`
          }}
        />
        <div 
          className="absolute -bottom-80 -right-80 w-[50rem] h-[50rem] opacity-20 blur-3xl animate-spin-slow"
          style={{
            animationDelay: '7.5s',
            background: `conic-gradient(from 0deg at 50% 50%, #a855f7 0%, #ec4899 25%, transparent 50%, transparent 100%)`
          }}
        />
      </div>

      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
      />
      <div className="relative z-10 flex flex-col items-center gap-6 mb-12">
        <MarioEditorIcon className="w-28 h-28 animate-rainbow-glow" />
        <div className="p-1 rounded-2xl bg-rainbow-gradient bg-400% animate-rainbow-border-flow">
            <div className="bg-editor-bg rounded-xl px-8 py-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-rainbow-gradient bg-200% animate-rainbow-text-flow leading-tight">
                Trình chỉnh sửa thế hệ mới
              </h1>
            </div>
        </div>
        <div className="text-xl text-gray-200 max-w-4xl flex flex-col gap-3 [&>p]:text-balance">
          <p>Công cụ tất cả trong một để biến ý tưởng của bạn thành hiện thực.</p>
          <p>Chỉnh sửa, lên ý tưởng và xem lại các dự án của bạn một cách dễ dàng.</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <FeatureCard
          icon={<EditIcon className="w-8 h-8 mb-4 text-primary" />}
          title="Bắt đầu Chỉnh sửa"
          description="Tải ảnh lên và sử dụng các công cụ mạnh mẽ để tinh chỉnh mọi chi tiết một cách chuyên nghiệp."
          onClick={handleButtonClick}
        />
        <FeatureCard
          icon={<ChatIcon className="w-8 h-8 mb-4 text-primary" />}
          title="Mario Chatbot"
          description="Trò chuyện với Mario để tìm kiếm ý tưởng, nhận gợi ý chỉnh sửa hoặc tạo nội dung mới."
          onClick={onGoToChatbot}
        />
        <FeatureCard
          icon={<ProjectsIcon className="w-8 h-8 mb-4 text-primary" />}
          title="Quản lý Dự án"
          description="Xem lại các dự án đã lưu, so sánh các phiên bản và tiếp tục công việc của bạn."
          disabled
        />
      </div>
    </main>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  disabled?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`group relative p-8 bg-panel-bg rounded-2xl shadow-lg border border-gray-700 text-center flex flex-col items-center justify-start transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-editor-bg ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
  >
    <div 
      className="absolute -inset-2 bg-rainbow-gradient bg-400% animate-rainbow-border-flow rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"
      aria-hidden="true"
    ></div>
    <div className="flex-grow flex flex-col items-center justify-center">
      {icon}
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
     <span className={`mt-6 font-semibold text-primary transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${disabled ? 'hidden' : ''}`}>
      Bắt đầu ngay &rarr;
    </span>
  </button>
);


export default WelcomePage;