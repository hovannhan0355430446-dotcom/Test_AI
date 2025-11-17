import React from 'react';

export const SuperStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props} style={{ imageRendering: 'pixelated' }}>
        <path fill="#FCCA46" d="M16 2l-4 8-9 .5 7 7-2 9 8-5 8 5-2-9 7-7-9-.5z"/>
        <path fill="#000" d="M13 14h-2v2h2v-2zM21 14h-2v2h2v-2z"/>
    </svg>
);
