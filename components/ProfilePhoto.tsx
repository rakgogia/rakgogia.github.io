import React from 'react';

export const ProfilePhoto: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img
  src="/ProfilePhoto.jpg"
      alt="Profile Photo"
      style={{ height: 'auto', width: 'auto' }}
      {...props}
    />
  );