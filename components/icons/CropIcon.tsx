import React from 'react';

export const CropIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M3.75 16.5V18a2.25 2.25 0 0 0 2.25 2.25h1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18a2.25 2.25 0 0 1-2.25 2.25h-1.5m-6-15h.008v.008H10.5V3.75Zm-3.75 0h.008v.008H6.75V3.75Zm0 3.75h.008v.008H6.75V7.5Zm0 3.75h.008v.008H6.75v-.008Zm0 3.75h.008v.008H6.75v-.008Zm0 3.75h.008v.008H6.75V18.75Zm3.75 0h.008v.008H10.5v-.008Zm3.75 0h.008v.008H14.25v-.008Zm0-3.75h.008v.008H14.25v-.008Zm0-3.75h.008v.008H14.25V7.5Zm3.75 0h.008v.008H18V7.5Zm-3.75 3.75h.008v.008H14.25v-.008Z" />
  </svg>
);