import React from 'react';

// Pixel art of a walking Mario
export const WalkingMarioIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props} style={{ imageRendering: 'pixelated', ...props.style }}>
        <g fill="#E62C34"> {/* Red */}
            <path d="M4,0 h5 v1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-5 v-1 h-1 v-1 h1z M0,8 h2 v4 h-2z M13,8 h3 v3 h-2 v1 h-1z" />
        </g>
        <g fill="#78350f"> {/* Brown */}
            <path d="M3,2 h1 v1 h1 v1 h5 v-1 h1 v-1 h1 v1 h1 v3 h-1 v1 h-1 v-1 h-1 v1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-2z M1,14 h4 v2 h-4z M7,14 h4 v2 h-4z" />
        </g>
        <g fill="#F8D4A8"> {/* Skin */}
             <path d="M4,3 h1 v1 h5 v-1 h1 v3 h-1 v-1 h-1 v-1 h-1 v1 h-1 v1 h-1 v-1 h-1 v1 h-1z M5,5 h3 v2 h-1z M0,10 h2 v2 h-2z M14,10 h2 v2 h-2z" />
        </g>
        <g fill="#3b82f6"> {/* Blue */}
            <path d="M2,8 h1 v1 h1 v-1 h1 v-1 h2 v1 h1 v1 h2 v-1 h1 v1 h2 v4 h-1 v-1 h-1 v1 h-2 v1 h-2 v-1 h-2 v-1 h-2 v-1 h-2z" />
        </g>
        <g fill="#FCCA46"> {/* Yellow */}
            <path d="M4,8 h1 v1 h-1z M9,8 h1 v1 h-1z" />
        </g>
    </svg>
);
