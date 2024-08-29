import React, { useState } from 'react';

import WindowHeader from './windowHeader';
import WindowBody from './windowBody';

const InternalWindow = (props: {
  children: React.ReactNode;
  title?: string;
  dimensions?: { width: string; height: string };
  initialPosition: { top: number; left: number };
  onClose: () => void;
}) => {
  const [currentPosition, setCurrentPosition] = useState(props.initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartPosition({
      top: e.clientY - currentPosition.top,
      left: e.clientX - currentPosition.left,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && dragStartPosition) {
      setCurrentPosition({
        top: e.clientY - dragStartPosition.top,
        left: e.clientX - dragStartPosition.left,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartPosition(null);
  };
  return (
    <div
      className={`h-screen w-screen flex left-0 top-0 fixed`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`missing-win-container overflow-hidden bg-secondary border-2 border-green-500 border-solid rounded-md m-auto shadow-green-700 shadow-lg`}
        style={{
          width: props.dimensions?.width || '1200px',
          height: props.dimensions?.height || '900px',
          top: `${currentPosition.top}px`,
          left: `${currentPosition.left}px`,
          position: 'absolute',
          cursor: isDragging ? 'grabbing' : 'default',
        }}
      >
        <WindowHeader
          title={props.title}
          onClick={props.onClose}
          onMouseDown={handleMouseDown}
        />
        <WindowBody children={props.children} />
      </div>
    </div>
  );
};

export default InternalWindow;
