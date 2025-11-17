import React from 'react';

export const MarioEditorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* The rotating aperture blades in the background */}
    <g className="animate-spin-slow" style={{ transformOrigin: 'center center' }}>
        <path fill="#93c5fd" opacity="0.3" d="M50 10 a 40 40 0 0 1 34.64 20 L 50 50 Z" transform="rotate(0 50 50)" />
        <path fill="#93c5fd" opacity="0.4" d="M50 10 a 40 40 0 0 1 34.64 20 L 50 50 Z" transform="rotate(60 50 50)" />
        <path fill="#93c5fd" opacity="0.5" d="M50 10 a 40 40 0 0 1 34.64 20 L 50 50 Z" transform="rotate(120 50 50)" />
        <path fill="#93c5fd" opacity="0.6" d="M50 10 a 40 40 0 0 1 34.64 20 L 50 50 Z" transform="rotate(180 50 50)" />
        <path fill="#93c5fd" opacity="0.7" d="M50 10 a 40 40 0 0 1 34.64 20 L 50 50 Z" transform="rotate(240 50 50)" />
        <path fill="#93c5fd" opacity="0.8" d="M50 10 a 40 40 0 0 1 34.64 20 L 50 50 Z" transform="rotate(300 50 50)" />
    </g>

    {/* The static Mario M logo in the foreground */}
    <g style={{ transform: 'scale(0.9)', transformOrigin: '50% 50%' }}>
        <circle cx="50" cy="50" r="45" fill="#E62C34" stroke="white" strokeWidth="4" />
        <path d="M25 75 L35 25 L50 55 L65 25 L75 75 L65 75 L55 40 L45 75 Z" fill="white" />
    </g>
  </svg>
);
