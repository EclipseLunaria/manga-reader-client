import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from './PageNav';

import ChapterSelector from './Selector';
import ClickPageNav from '../clickPageNav';

const ViewerHeader = (props: {
  title: string;
  mangaId: string;
  chapterId: string;
  pgTotal: number;
  pgCurrent: number;
  chapters: string[] | null;
  onSetPage: (page: number | 'next' | 'prev') => void;
}) => {
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

      <ChapterSelector
        mangaId={props.mangaId}
        chapterId={props.chapterId}
        onPageSet={props.onSetPage}
      />
      <PageNav
        onPageNav={props.onSetPage}
        pgCurrent={props.pgCurrent}
        pgTotal={props.pgTotal}
      />
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
