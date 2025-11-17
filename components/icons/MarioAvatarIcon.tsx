import React from 'react';

// Pixel art of Mario's face
export const MarioAvatarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props} style={{ imageRendering: 'pixelated', ...props.style }}>
        <path fill="#E62C34" d="M4,2 h8 v1 h1 v1 h-1 v1 H4 V4 H3 V3 h1z"/> {/* Hat */}
        <path fill="#78350f" d="M3,5 h2 v1 h-1 v1 H3z M11,5 h2 v1 h-1 v1 h-1z M4,6 h1 v1 H4z M11,6 h1 v1 h-1z M4,9 h1 v1 h-1z M11,9 h1 v1 h-1z M5,10 h6 v1 H5z"/> {/* Hair & Moustache */}
        <path fill="#F8D4A8" d="M5,5 h6 v1 H5z M4,7 h8 v2 H4z M3,7 h1 v2 H3z M12,7 h1 v2 h-1z"/> {/* Face */}
        <path fill="#000" d="M6,7 h1 v1 H6zm3,0 h1 v1 H9z"/> {/* Eyes */}
    </svg>
);
