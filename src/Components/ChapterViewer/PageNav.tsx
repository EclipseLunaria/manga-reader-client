import React from 'react';
import { ChapterNavButton } from './ViewHeader';

const PageNav = (props: {
  onPageNav: (nav: 'next' | 'prev') => void;
  pgCurrent: number;
  pgTotal: number;
}) => {
  return (
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
  );
};

export default PageNav;
