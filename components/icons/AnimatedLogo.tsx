import React from 'react';

export const AnimatedLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    {...props}
  >
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    <g className="animate-float">
      <circle cx="100" cy="100" r="90" fill="url(#grad1)" className="animate-pulse" />
      <path
        fill="#fff"
        d="M100 30 A70 70 0 0 1 159.2 65.3 L100 100 Z"
        transform="rotate(0 100 100)"
      />
      <path
        fill="#fff"
        d="M100 30 A70 70 0 0 1 159.2 65.3 L100 100 Z"
        transform="rotate(60 100 100)"
        opacity="0.9"
      />
      <path
        fill="#fff"
        d="M100 30 A70 70 0 0 1 159.2 65.3 L100 100 Z"
        transform="rotate(120 100 100)"
        opacity="0.8"
      />
      <path
        fill="#fff"
        d="M100 30 A70 70 0 0 1 159.2 65.3 L100 100 Z"
        transform="rotate(180 100 100)"
        opacity="0.7"
      />
      <path
        fill="#fff"
        d="M100 30 A70 70 0 0 1 159.2 65.3 L100 100 Z"
        transform="rotate(240 100 100)"
        opacity="0.6"
      />
      <path
        fill="#fff"
        d="M100 30 A70 70 0 0 1 159.2 65.3 L100 100 Z"
        transform="rotate(300 100 100)"
        opacity="0.5"
      />
      <circle cx="100" cy="100" r="25" fill="#1e3a8a" />
    </g>
  </svg>
);