import React from 'react';
import './spinner.css';
const LoadingSpinner = () => {
  return (
    <div className={`relative h-full w-full animate-spin spinner`}>
      <div className="absolute animate-spin border-t-green-400 border-transparent rounded-full border-4 h-full w-full"></div>
      <div className="absolute spinner-tail-1 border-t-green-400 border-transparent rounded-full border-4 h-full w-full"></div>
      <div className="absolute tailspin-2 spinner-tail-2 border-4 rounded-full border-transparent border-t-green-400 h-full w-full"></div>
      <div className="absolute tailspin-2 spinner-tail-3 border-4 rounded-full border-transparent border-t-green-400 h-full w-full"></div>
    </div>
  );
};

export default LoadingSpinner;
