import React, { useEffect, useState } from 'react';
import ReaderChapterArrows from './readerChapterArrows';
import ChapterSelector from './chapterSelector';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFieldHook } from '../../hooks';
import ChapterSearchBox from './chapterSearchBox';

const ReaderSidebar = () => {
  const [navSelected, setNavSelected] = useState(false);
  const navigation = useNavigate();
  const { titleId, chapterId } = useParams();
  if (!titleId) {
    navigation('/404');
    return null;
  }
  console.log(titleId);
  const { loading, field: seriesName } = fetchFieldHook<string>(
    titleId!,
    'title',
  );

  const handleClick = () => {
    setNavSelected(!navSelected);
  };

  const hideSearchBox = () => {
    setNavSelected(false);
  };

  return (
    <div className="flex bg-secondary">
      <div className="sidebar left-0 top-0 p-4 w-56 h-full flex flex-col gap-y-4">
        <div className="text-3xl mx-auto">MANGA FLUX</div>
        <div className="spacer border border-gray-400 border-opacity-35 my-8" />
        <div className="text-xl">{!loading && seriesName}</div>
        <ChapterSelector onClick={handleClick} selected={navSelected} />
        <ReaderChapterArrows />
        <div className="mt-auto"></div>
      </div>
      {navSelected && <ChapterSearchBox onHide={hideSearchBox} />}
    </div>
  );
};

export default ReaderSidebar;
