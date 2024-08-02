import React from 'react';
import ViewNavButton from './ViewNavButtons';
const PageNav = (props: {
  onPageNav: (nav: 'next' | 'prev') => void;
  pgCurrent: number;
  pgTotal: number;
}) => {
  return (
    <div className="chapter-header-info flex flex-row justify-between">
      <ViewNavButton
        disabled={props.pgCurrent === 1}
        text="⇦ Prev"
        onClick={() => props.onPageNav('prev')}
      />

      <ViewNavButton
        text={`Pg. ${props.pgCurrent}/${props.pgTotal}`}
        onClick={() => {}}
        disableHighlight
      />
      <ViewNavButton
        text="Next ⇨"
        onClick={() => props.onPageNav('next')}
        disabled={props.pgCurrent === props.pgTotal}
      />
    </div>
  );
};

export default PageNav;
