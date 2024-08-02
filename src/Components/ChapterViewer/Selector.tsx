import React, { useEffect, useState } from 'react';
import fetchFieldHook from '../../utils/fetchSeriesFieldHook';
import { Chapter } from '../../utils/getSeriesInfoHook';
import { useNavigate } from 'react-router-dom';
import { ChapterNavButton } from './ViewHeader';
import getAdjacentChapters from '../../utils/getAdjacentChapters';

const ChapterSelector = (props: {
  mangaId: string;
  chapterId: string;
  onPageSet: (page: number) => void;
}) => {
  const navigate = useNavigate();
  const [adjacentChapters, setAdjacentChapters] = useState<{
    nextChapter: Chapter | null;
    prevChapter: Chapter | null;
  }>({ nextChapter: null, prevChapter: null });

  const handleChange = (e: any) => {
    navigate(`/title/${props.mangaId}/chapter/${e.target.value}`);
  };
  const { field: chapterData } = fetchFieldHook<Chapter[]>(
    props.mangaId,
    'chapters',
  );
  const options = chapterData?.map((chapter, index) => (
    <option key={index} value={chapter.id}>
      {chapter.title}
    </option>
  ));

  useEffect(() => {
    const fetchAdjacentChapters = async () => {
      const result = await getAdjacentChapters(chapterData, props.chapterId);
      setAdjacentChapters(result);
    };
    fetchAdjacentChapters();
  }, [chapterData, props.chapterId]);

  return (
    <div className="chapter-selector w-full bg-transparent p-2">
      <div className="chapter-header-info flex flex-row justify-between">
        <ChapterNavButton
          text="Previous Chapter"
          onClick={() => {
            navigate(
              `/title/${props.mangaId}/chapter/${adjacentChapters.prevChapter?.id}`,
              { replace: true },
            );
            props.onPageSet(0);
          }}
        />
        <ChapterNavButton
          text="Next Chapter"
          onClick={() => {
            navigate(
              `/title/${props.mangaId}/chapter/${adjacentChapters.nextChapter?.id}`,
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
