import React from 'react';
import { Chapter } from '../../utils/getSeriesInfoHook';

const ChapterSection = (props: { chapters: Chapter[] }) => {
  return (
    <div className="chapter-section w-full ">
      <div className="chapter-list">
        {props.chapters.map((chapter, index) => (
          <ChapterCard
            key={index}
            chapter={chapter.title}
            link={chapter.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterSection;

const ChapterCard = (props: { chapter: string; link: string }) => {
  if (!props.chapter) {
    return null;
  }
  return (
    <a
      className="chapter-card bg-secondary rounded-md flex h-24 flex-col justify-center p-2 m-2"
      href={props.link}
    >
      <div className="chapter-title">{props.chapter}</div>
    </a>
  );
};
