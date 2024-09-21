import React from 'react';
import Image from 'next/image';

interface ImageProps {
  className: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const HeroImage: React.FC<ImageProps> = ({ className, src, alt, width, height }) => {
  return <Image className={className} src={src} alt={alt} width={width} height={height} />;
};

export default HeroImage;
