import React from 'react';

const WindowBody = (props: { children: React.ReactNode }) => (
  <div className="missing-win-body relative h-full w-full flex">
    {props.children}
  </div>
);

export default WindowBody;
