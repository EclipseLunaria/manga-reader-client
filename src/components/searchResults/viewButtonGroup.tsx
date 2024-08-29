import React, { useState } from 'react';
import ViewButton, { SearchView } from './viewButton';

const VIEW_TYPES: SearchView[] = ['list', 'grid', 'cover'];

const ViewButtonGroup = (props: { onClick: (type: SearchView) => void }) => {
  const [selectedView, setSelectedView] = useState<SearchView>('list');
  const handleClick = (type: SearchView) => {
    props.onClick(type);
    setSelectedView(type);
  };
  return (
    <div className="view-options w-full flex flex-row">
      <div className="w-fit h-full flex flex-row rounded-lg overflow-hidden ml-auto">
        {VIEW_TYPES.map((type) => (
          <ViewButton
            key={type}
            icon={type}
            onClick={handleClick}
            isSelected={selectedView === type}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewButtonGroup;
