import React from 'react';
import { Outlet } from 'react-router-dom';
import ReaderSidebar from './readerSidebar';

const ReaderLayout = () => {
  return (
    <div className="h-screen w-screen flex">
      <ReaderSidebar />
      <div>CONTENT</div>
    </div>
  );
};

export default ReaderLayout;
