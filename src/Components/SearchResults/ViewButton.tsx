import React from 'react';
export type SearchView = 'list' | 'grid' | 'cover';
import ListView from '../../assets/search/list-view.png';
import DenseView from '../../assets/search/dense-view.png';
import GridView from '../../assets/search/grid-view.png';
const VIEW_ICONS = {
  list: <img src={ListView} alt="list view" className="p-1" />,
  grid: <img src={DenseView} alt="grid view" className="p-1.5" />,
  cover: <img src={GridView} alt="grid view" className="p-2" />,
};

const ViewButton = (props: {
  icon: SearchView;
  onClick: (type: SearchView) => void;
  isSelected?: boolean;
}) => {
  return (
    <div
      className={` w-12 h-12 p-1 hover:bg-accentBackground transition-colors ${
        props.isSelected ? 'bg-accentBackground' : 'bg-secondary'
      }`}
      onClick={() => props.onClick(props.icon)}
    >
      {VIEW_ICONS[props.icon]}
    </div>
  );
};

export default ViewButton;
