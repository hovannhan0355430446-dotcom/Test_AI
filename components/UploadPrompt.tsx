import React, { useCallback, useRef } from 'react';
import { UploadIcon } from './icons/UploadIcon';

interface UploadPromptProps {
  onImageUpload: (file: File) => void;
}

const UploadPrompt: React.FC<UploadPromptProps> = ({ onImageUpload }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
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
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={() => inputRef.current?.click()}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
      />
      <div className="flex flex-col items-center justify-center space-y-4 text-text-secondary cursor-pointer">
        <UploadIcon className="w-12 h-12" />
        <span className="text-lg font-medium text-text-primary">Kéo và thả ảnh vào đây</span>
      </div>
    </div>
  );
};

export default UploadPrompt;