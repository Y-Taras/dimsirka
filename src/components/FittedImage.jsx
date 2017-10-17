// @flow

import React from 'react';

const supports = CSS.supports && CSS.supports('object-fit', 'cover') && CSS.supports('object-position', '0 0');

type FittedImgType = {
  alt: string,
  className: string,
  fit: 'fill' | 'contain' | 'cover' | 'none',
  height: string | number,
  position: string,
  src: string,
  width: string | number
};

const FittedImage = (props: FittedImgType) => {
  const { alt, className, fit, height, position, src, width } = props;
  return supports ? (
    <img
      alt={alt}
      className={className}
      height={height}
      src={src}
      style={{
        objectFit: fit,
        objectPosition: position
      }}
      width={width}
    />
  ) : (
    <span
      aria-label={alt}
      className={className}
      role="img"
      style={{
        backgroundImage: `url("${src}")`,
        backgroundPosition: position,
        backgroundSize: fit.replace('fill', '100% 100%').replace('none', 'auto'),
        display: 'inline-block',
        height: Number.isFinite(height) ? `${height}px` : height,
        width: Number.isFinite(width) ? `${width}px` : width
      }}
    />
  );
};

export default FittedImage;
