import React from 'react';
import { Chapter } from '../../utils/getSeriesInfoHook';
import { Link } from 'react-router-dom';

const ChapterSection = (props: { chapters: Chapter[]; mangaId: string }) => {
  return (
    <div className="chapter-section w-full ">
      <div className="chapter-list">
        {props.chapters.map((chapter, index) => (
          <ChapterCard
            key={index}
            chapter={chapter.title}
            link={chapter.link}
            mangaId={props.mangaId}
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterSection;

const ChapterCard = (props: {
  chapter: string;
  link: string;
  mangaId: string;
}) => {
  const chapterId = props.link.split('/').pop()?.split('-').pop();
  if (!props.chapter) {
    return null;
  }
  return (
    <Link
      className="chapter-card bg-secondary rounded-md flex h-24 flex-col justify-center p-2 m-2"
      to={`/title/${props.mangaId}/chapter/${chapterId}`}
    >
      <div className="chapter-title">{props.chapter}</div>
    </Link>
  );
};
