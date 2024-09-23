import React, { useState, useEffect } from 'react';
import { Chapter } from '../../utils/types';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFieldHook, getAdjacentChapters } from '../../hooks';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { IoMdArrowRoundForward } from 'react-icons/io';

const ReaderChapterArrows = () => {
  const navigate = useNavigate();
  const { titleId, chapterId } = useParams();
  const { field: chapters } = fetchFieldHook<Chapter[] | null>(
    titleId!,
    'chapters',
  );

  const [adjacentChapters, setAdjacentChapters] = useState<{
    nextChapter: Chapter | null;
    prevChapter: Chapter | null;
  }>({ nextChapter: null, prevChapter: null });
  const [chapterList, setChapterList] = useState<Chapter[] | null>(null);

  useEffect(() => {
    const fetchAdjacentChapters = async () => {
      if (chapterId) {
        console.log(chapterList);
        const result = await getAdjacentChapters(chapterList, chapterId);
        setAdjacentChapters(result);
      }
    };
    setChapterList(
      chapters &&
        chapters.sort(
          (a, b) => parseFloat(a.chapter_id) - parseFloat(b.chapter_id),
        ),
    );
    fetchAdjacentChapters();
  }, [chapters, chapterId]);
  return (
    <div className="arrow-container gap-x-2 w-full flex text-white ">
      <div
        className="w-1/2 h-10 bg-primary rounded-xl cursor-pointer hover:bg-accentBackground transition-all"
        onClick={() =>
          adjacentChapters.prevChapter &&
          navigate(
            `/read/${titleId}/${adjacentChapters.prevChapter?.chapter_id}`,
          )
        }
      >
        <IoMdArrowRoundBack className="m-auto h-full " size={24} />
      </div>
      <div
        className="w-1/2 h-10 bg-primary hover:bg-accentBackground rounded-xl cursor-pointer transition-all"
        onClick={() =>
          adjacentChapters.nextChapter &&
          navigate(
            `/read/${titleId}/${adjacentChapters.nextChapter?.chapter_id}`,
          )
        }
      >
        <IoMdArrowRoundForward className="m-auto h-full" size={24} />
      </div>
    </div>
  );
};

export default ReaderChapterArrows;
