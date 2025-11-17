import React from 'react';

export const MarioMIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="45" fill="#E62C34" stroke="white" strokeWidth="3" />
    <path d="M25 75 L35 25 L50 55 L65 25 L75 75 L65 75 L55 40 L45 75 Z" fill="white" />
  </svg>
);
