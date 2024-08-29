import React from 'react';

const MangaDescriptionBox = (props: { description: string }) => {
  return (
    <div className="description-box border-b-2 pb-10 border-secondary">
      <div className="description p-2 mt-4">{props.description}</div>
    </div>
  );
};

export default MangaDescriptionBox;
