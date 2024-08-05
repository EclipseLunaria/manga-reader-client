import React from 'react';

import InternalWindowHeader from './WindowHeader';
import WindowBody from './WindowBody';

const InternalWindow = (props: {
  children: React.ReactNode;
  title?: string;
  dimensions?: { width: string; height: string };
  onClose: () => void;
}) => {
  return (
    <div className={`h-screen w-screen flex left-0 top-0 fixed`}>
      <div
        className={`missing-win-container overflow-hidden relative bg-secondary border-2 border-cyan-500 border-solid rounded-md m-auto`}
        style={{
          width: props.dimensions?.width || '1200px',
          height: props.dimensions?.height || '900px',
        }}
      >
        <InternalWindowHeader title={props.title} onClick={props.onClose} />
        <WindowBody children={props.children} />
      </div>
    </div>
  );
};

export default InternalWindow;
