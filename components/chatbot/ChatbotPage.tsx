import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { HomeIcon } from '../icons/HomeIcon';
import { SparklesIcon } from '../icons/SparklesIcon';
import { SendIcon } from '../icons/SendIcon';
import ChatMessage from './ChatMessage';
import SuggestionChip from './SuggestionChip';
import { EditIcon } from '../icons/EditIcon';
import { WandIcon } from '../icons/WandIcon';
import { ChatIcon } from '../icons/ChatIcon';
import { WalkingMarioIcon } from '../icons/WalkingMarioIcon';

interface ChatbotPageProps {
  onGoToWelcome: () => void;
  onImageUpload: (file: File) => void;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatbotPage: React.FC<ChatbotPageProps> = ({ onGoToWelcome, onImageUpload }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [showUploadButton, setShowUploadButton] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: "Bạn là một trợ lý hữu ích cho một trình chỉnh sửa ảnh trực tuyến. Mục tiêu của bạn là hướng dẫn người dùng cách sử dụng các tính năng của trình chỉnh sửa. Bạn có thể đề xuất các tác vụ như xóa nền, nâng cao chất lượng ảnh, hoặc đưa ra các ý tưởng sáng tạo. Khi người dùng muốn thực hiện một tác vụ, hãy hướng dẫn họ các bước. Ví dụ, nếu họ muốn xóa nền, hãy yêu cầu họ tải ảnh lên trước. Hãy trả lời bằng tiếng Việt.",
          },
        });
        setChat(newChat);
      } catch (error) {
        console.error("Lỗi khởi tạo Gemini:", error);
        setMessages([{ sender: 'bot', text: 'Rất tiếc, đã có lỗi xảy ra khi kết nối với trợ lý AI.' }]);
      }
    };
    initChat();
  }, []);
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading || !chat) return;

    const userMessage: Message = { sender: 'user', text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setShowUploadButton(false);

    try {
        const response = await chat.sendMessage({ message: messageText });
        const botResponseText = response.text;
        
        // Special case for background removal
        if (messageText.toLowerCase().includes('xóa phông') || messageText.toLowerCase().includes('remove background')) {
            setShowUploadButton(true);
        }
        
        const botMessage: Message = { sender: 'bot', text: botResponseText };
        setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
        console.error("Lỗi gửi tin nhắn:", error);
        const errorMessage: Message = { sender: 'bot', text: 'Xin lỗi, tôi đang gặp sự cố. Vui lòng thử lại sau.' };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
        onImageUpload(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-editor-bg text-gray-300">
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <button 
          onClick={onGoToWelcome} 
          title="Trang chính" 
          className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <HomeIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-primary"/>
            <h1 className="text-xl font-semibold text-gray-100">Mario Chatbot</h1>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <WalkingMarioIcon className="w-[24rem] h-[24rem] opacity-40" />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10">
          {messages.length === 0 && !isLoading ? (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-100 mb-2">Xin chào!</h2>
              <p className="text-xl text-gray-400 mb-12">Tôi là trợ lý sáng tạo, tôi có thể giúp gì cho bạn hôm nay?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SuggestionChip 
                    icon={<WandIcon className="w-5 h-5" />}
                    title="Xóa phông nền"
                    description="Tự động tách chủ thể ra khỏi ảnh nền."
                    onClick={() => handleSuggestionClick("Tôi muốn xóa phông nền khỏi một bức ảnh")}
                  />
                  <SuggestionChip 
                    icon={<EditIcon className="w-5 h-5" />}
                    title="Cải thiện ảnh"
                    description="Gợi ý các bước để làm cho ảnh của bạn đẹp hơn."
                    onClick={() => handleSuggestionClick("Làm thế nào để cải thiện chất lượng bức ảnh này?")}
                  />
                   <SuggestionChip 
                    icon={<ChatIcon className="w-5 h-5" />}
                    title="Lên ý tưởng"
                    description="Tìm kiếm cảm hứng cho dự án tiếp theo của bạn."
                    onClick={() => handleSuggestionClick("Hãy cho tôi một vài ý tưởng chỉnh sửa ảnh độc đáo")}
                  />
              </div>
            </div>
          ) : (
            messages.map((msg, index) => <ChatMessage key={index} sender={msg.sender} text={msg.text} />)
          )}
          {isLoading && <ChatMessage sender="bot" text="" isLoading={true} />}
          {showUploadButton && (
            <div className="flex justify-center">
                <button 
                    onClick={handleFileUploadClick}
                    className="mt-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
                >
                    Tải ảnh lên
                </button>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>
      
      <footer className="p-4 border-t border-gray-700">
        <form 
            className="max-w-3xl mx-auto flex items-center gap-3 bg-gray-800 rounded-xl p-2"
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
        >
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập yêu cầu của bạn ở đây..."
                className="flex-1 bg-transparent px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none"
                disabled={isLoading}
            />
            <button 
                type="submit" 
                className="p-2 rounded-full bg-primary text-white disabled:bg-gray-600 transition-colors"
                disabled={!inputValue.trim() || isLoading}
                aria-label="Gửi"
            >
                <SendIcon className="w-5 h-5" />
            </button>
        </form>
         <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileSelected}
        />
      </footer>
    </div>
  );
};

export default ChatbotPage;