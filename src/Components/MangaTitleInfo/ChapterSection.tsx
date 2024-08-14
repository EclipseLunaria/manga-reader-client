import React from 'react';
import { Chapter } from '../../utils/types';
import { Link } from 'react-router-dom';
import { fetchFieldHook } from '../../utils/hooks';

const ChapterSection = (props: { chapters: Chapter[]; mangaId: string }) => {
  const { field: chapterData } = fetchFieldHook<Chapter[]>(
    props.mangaId,
    'chapters',
  );
  console.log(chapterData,":chapter data")
  if (!chapterData) {
    return null;
  }
  return (
    <div className="chapter-section w-full ">
      <div className="chapter-list">
        {chapterData.map((chapter, index) => (
          <ChapterCard
            key={index}
            chapter={chapter.title}
            chapter_id={chapter.chapter_id}
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
  chapter_id: string;
  mangaId: string;
}) => {
  const chapterId = props.chapter_id;
  console.log(chapterId)
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
