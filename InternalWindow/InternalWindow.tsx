import React from 'react';

import InternalWindowHeader from './WindowHeader';
import WindowBody from './WindowBody';

const InternalWindow = (props: {
  children: React.ReactNode;
  title?: string;
  dimensions?: { width: string; height: string };
}) => {
  return (
    <div className="h-screen w-screen flex">
      <div
        className={`missing-win-constainer overflow-hidden ${
          props.dimensions
            ? `w-[${props.dimensions?.width}] h-[${props.dimensions?.height}]`
            : `w-[1200px] h-[900px]`
        } bg-secondary border-2 border-cyan-500 border-solid rounded-md m-auto`}
      >
        <InternalWindowHeader title={props.title} />
        <WindowBody children={props.children} />
      </div>
    </div>
  );
};
