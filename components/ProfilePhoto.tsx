import React from 'react';

export const ProfilePhoto: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/ProfilePhoto.webp"
    alt="Rakshit Gogia in Yosemite"
    width="1125"
    height="1500"
    loading="eager"
    fetchPriority="high"
    {...props}
  />
);