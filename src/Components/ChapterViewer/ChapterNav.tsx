import React, { useState } from 'react';
import { ChapterNavButton } from './ViewHeader';

const ChapterNav = (props: { chapterId: string; mangaId: string }) => {
  const [nextChapter, setNextChapter] = useState<string>('');
  const [prevChapter, setPrevChapter] = useState<string>('');

  const getAdjacentChapters = async () => {
    const ENDPOINT_URL = `http://localhost:6900/manga/${props.mangaId}/chapter/${props.chapterId}`;
    try {
      const response = await fetch(ENDPOINT_URL);
      const data = await response.json();
      setNextChapter(data.nextChapter);
      setPrevChapter(data.prevChapter);
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="chapter-header-info flex flex-row justify-between">
      <ChapterNavButton text="Previous Chapter" onClick={() => {}} />
      <ChapterNavButton text="Next Chapter" onClick={() => {}} />
    </div>
  );
};
