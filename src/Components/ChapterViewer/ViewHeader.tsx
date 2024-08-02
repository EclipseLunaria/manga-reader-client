import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ChapterSelector from './Selector';

const ViewerHeader = (props: {
  title: string;
  mangaId: string;
  chapterId: string;
  pgTotal: number;
  pgCurrent: number;
  onPageNav: (nav: 'next' | 'prev') => void;
}) => {
  const navigator = useNavigate();
  const onSelect = (e: any) => {
    navigator(`/title/${props.mangaId}/chapter/${e.target.value}`);
  };
  return (
    <div className="viewer-header  text-white p-2 flex flex-col">
      <div className="chapter-title text-5xl m-3">
        CHAPTER {props.chapterId}
      </div>
      <Link
        to={`/title/${props.mangaId}`}
        className="series-title text-4xl m-2 mb-5"
      >
        ⮈ {props.title}
      </Link>
      <div className="chapter-header-info flex flex-row justify-between">
        <ChapterNavButton text="Previous Chapter" onClick={() => {}} />
        <ChapterNavButton text="Next Chapter" onClick={() => {}} />
      </div>
      <ChapterSelector mangaId={props.mangaId} />
      <div className="chapter-header-info flex flex-row justify-between">
        <ChapterNavButton
          disabled={props.pgCurrent === 1}
          text="⇦ Prev"
          onClick={() => props.onPageNav('prev')}
        />

        <ChapterNavButton
          text={`Pg. ${props.pgCurrent}/${props.pgTotal}`}
          onClick={() => {}}
          disableHighlight
        />
        <ChapterNavButton
          text="Next ⇨"
          onClick={() => props.onPageNav('next')}
          disabled={props.pgCurrent === props.pgTotal}
        />
      </div>
    </div>
  );
};

export default ViewerHeader;

export const ChapterNavButton = (props: {
  text: string;
  disableHighlight?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={props.onClick}
      className={`chapter-nav-button m-2 p-1 text-2xl
                 rounded-md bg-secondary select-none
                 w-full bold flex justify-center 
                 transition-colors cursor-pointer
                 ${
                   props.disableHighlight
                     ? 'cursor-default'
                     : 'hover:bg-green-700'
                 }
                 ${
                   props.disabled
                     ? 'cursor-default hover:bg-secondary opacity-40'
                     : ''
                 }`}
    >
      {props.text}
    </div>
  );
};
