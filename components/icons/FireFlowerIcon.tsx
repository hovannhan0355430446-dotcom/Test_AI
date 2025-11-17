import React from 'react';

export const FireFlowerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props} style={{ imageRendering: 'pixelated' }}>
        <path fill="#5A9E32" d="M18 30h-4v-10h-2v-2h8v2h-2zM12 20h-2v-2h2v-2h-4v6h2v2h-2v2h6v-6zM22 18h-2v2h-2v6h6v-2h-2v-2h2v-4h-2v2z"/>
        <path fill="#F27D2E" d="M16 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"/>
        <path fill="#E62C34" d="M16 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
        <path fill="#FFE094" d="M16 5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
        <path fill="#000" d="M14 8h-2v2h2zM20 8h-2v2h2z"/>
    </svg>
);
