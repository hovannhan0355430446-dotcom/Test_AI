import React from 'react';
import { UserIcon } from '../icons/UserIcon';
import { MarioAvatarIcon } from '../icons/MarioAvatarIcon';

interface ChatMessageProps {
    sender: 'user' | 'bot';
    text: string;
    isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text, isLoading }) => {
    const isUser = sender === 'user';

    return (
        <div className={`flex items-start gap-3 w-full ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${isUser ? 'bg-gray-600' : 'bg-white'}`}>
                {isUser ? <UserIcon className="w-5 h-5 text-white" /> : <MarioAvatarIcon />}
            </div>
            <div className={`p-4 rounded-2xl max-w-lg ${isUser ? 'bg-primary text-white rounded-br-none' : 'bg-gray-800 text-gray-200 rounded-bl-none'}`}>
                {isLoading ? (
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse" style={{animationDelay: '0s'}}></span>
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                        <span className="w-2 h-2 bg-current rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                    </div>
                ) : (
                    <p className="whitespace-pre-wrap">{text}</p>
                )}
            </div>
        </div>
    );
};

export default ChatMessage;