import React, { useEffect, useState } from 'react';
import { fetchFieldHook, getAdjacentChapters } from '../../../hooks';
import { Chapter } from '../../../utils/types';
import { useNavigate } from 'react-router-dom';
import { ChapterNavButton } from './viewHeader';

const ChapterSelector = (props: {
  mangaId: string;
  chapterId: string;
  onPageSet: (page: number) => void;
}) => {
  const { field: chapterData } = fetchFieldHook<Chapter[]>(
    props.mangaId,
    'chapters',
  );
  const [adjacentChapters, setAdjacentChapters] = useState<{
    nextChapter: Chapter | null;
    prevChapter: Chapter | null;
  }>({ nextChapter: null, prevChapter: null });

  const navigate = useNavigate();
  const handleChange = (e: any) => {
    navigate(`/title/${props.mangaId}/chapter/${e.target.value}`);
  };

  useEffect(() => {
    const fetchAdjacentChapters = async () => {
      const result = await getAdjacentChapters(chapterData, props.chapterId);
      setAdjacentChapters(result);
    };
    fetchAdjacentChapters();
  }, [chapterData, props.chapterId]);

  const options = chapterData
    ?.sort((a, b) => {
      if (!a || !b) return 0;
      const aNum = parseInt(
        a.link.split('/').pop()!.split('.')[0].split('-').pop()!,
      );
      const bNum = parseInt(
        b.link.split('/').pop()!.split('.')[0].split('-').pop()!,
      );
      return aNum - bNum;
    })
    .map((chapter, index) => (
      <option key={index} value={chapter.chapter_id}>
        {chapter.title}
      </option>
    ));

  return (
    <div className="chapter-selector w-full bg-transparent p-2">
      <div className="chapter-header-info flex flex-row justify-between">
        <ChapterNavButton
          text="Previous Chapter"
          onClick={() => {
            navigate(
              `/title/${props.mangaId}/chapter/${adjacentChapters.prevChapter?.chapter_id}`,
            );
            props.onPageSet(0);
          }}
        />
        <ChapterNavButton
          text="Next Chapter"
          onClick={() => {
            navigate(
              `/title/${props.mangaId}/chapter/${adjacentChapters.nextChapter?.chapter_id}`,
              { replace: true },
            );
            props.onPageSet(0);
          }}
        />
      </div>

      <select
        className="chapter-select w-full bg-secondary p-2 rounded-lg"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>
          {chapterData ? `Select Chapter` : 'Loading...'}
        </option>
        {options}
      </select>
    </div>
  );
};

export default ChapterSelector;
