import React from 'react';

const LoadingSpinner = (props: {
  size: string;
  borderWidth: string;
  primaryColor: string;
  secondaryColor: string;
}) => {
  const { size, borderWidth, primaryColor, secondaryColor } = props;
  return (
    <div
      className={`rounded-full h-[${size}] w-[${size}] border-[${borderWidth}] border-${secondaryColor}/20 border-t-${primaryColor} animate-spin`}
    ></div>
  );
};

export default LoadingSpinner;
