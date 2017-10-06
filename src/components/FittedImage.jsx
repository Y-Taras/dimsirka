// @flow

import React from 'react';

const supports =
  window.CSS && CSS.supports && CSS.supports('object-fit', 'cover') && CSS.supports('object-position', '0 0');

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
        height: isFinite(height) ? `${height}px` : height,
        width: isFinite(width) ? `${width}px` : width
      }}
    />
  );
};

FittedImage.defaultProps = {
  fit: 'fill',
  position: '50% 50%'
};

export default FittedImage;
