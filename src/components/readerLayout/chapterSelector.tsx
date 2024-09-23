import { useParams } from 'react-router-dom';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
const ChapterSelector = (props: { onClick: () => void; selected: boolean }) => {
  const { titleId, chapterId } = useParams();

  return (
    <div
      className={`flex flex-row rounded-lg transition-all shadow-xl cursor-pointer justify-center bg-primary border  h-10 w-full ${
        props.selected
          ? 'bg-green-800 text-white border-green-500 inset-0 '
          : 'bg-primary text-white border-green-600 text-opacity-75'
      }`}
      onClick={() => props.onClick()}
    >
      <div className="my-auto pb-1 text-xl">Chapter {chapterId}</div>
      <FaChevronDown size={22} className="my-auto ml-4" />
    </div>
  );
};

export default ChapterSelector;
