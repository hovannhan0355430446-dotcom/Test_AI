import React from 'react';
import { EditIcon } from '../icons/EditIcon';
import { WandIcon } from '../icons/WandIcon';
import { ChatIcon } from '../icons/ChatIcon';

interface SuggestionChipProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}

const SuggestionChip: React.FC<SuggestionChipProps> = ({ icon, title, description, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full text-left p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-start space-x-4 focus:outline-none focus:ring-2 focus:ring-primary"
        >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-primary">
                {icon}
            </div>
            <div>
                <p className="font-semibold text-gray-100">{title}</p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </button>
    );
};

export default SuggestionChip;