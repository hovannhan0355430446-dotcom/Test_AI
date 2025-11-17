import React, { useRef, useEffect, useState } from 'react';
import { AdjustmentsState } from '../App';

interface EditorCanvasProps {
  imageFile: File;
  adjustments: AdjustmentsState;
  zoom: number;
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({ imageFile, adjustments, zoom }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    let isCancelled = false;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!isCancelled) {
        setImageUrl(e.target?.result as string);
      }
    };
    reader.readAsDataURL(imageFile);
    return () => {
      isCancelled = true;
    }
  }, [imageFile]);

  useEffect(() => {
    if (!imageUrl || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      // Fit image within the parent container dimensions while maintaining aspect ratio
      const parent = canvas.parentElement;
      if (!parent) return;

      const parentWidth = parent.clientWidth;
      const parentHeight = parent.clientHeight;
      const imgAspectRatio = img.width / img.height;
      
      let canvasWidth = parentWidth;
      let canvasHeight = parentWidth / imgAspectRatio;

      if (canvasHeight > parentHeight) {
        canvasHeight = parentHeight;
        canvasWidth = parentHeight * imgAspectRatio;
      }
      
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imageUrl;
  }, [imageUrl, zoom]); // Re-draw when zoom changes to ensure correct sizing logic if needed

  const { exposure, contrast } = adjustments;
  const canvasStyle: React.CSSProperties = {
    filter: `brightness(${1 + exposure / 100}) contrast(${1 + contrast / 100})`,
    transform: `scale(${zoom / 100})`,
    transition: 'transform 0.15s ease-in-out',
  };

  return (
    <canvas 
      ref={canvasRef} 
      className="max-w-full max-h-full object-contain shadow-2xl"
      style={canvasStyle}
    />
  );
};

export default EditorCanvas;