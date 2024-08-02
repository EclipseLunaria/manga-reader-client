import React, { useState } from 'react';
import { Chapter } from './getSeriesInfoHook';

const getAdjacentChapters = async (
  chapters: Chapter[] | null,
  chapterId: string,
) => {
  if (!chapters) {
    return { nextChapter: null, prevChapter: null };
  }
  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.id === chapterId,
  );
  const nextChapter = chapters[chapterIndex + 1];
  const prevChapter = chapters[chapterIndex - 1];
  console.log(nextChapter, prevChapter);
  return { nextChapter, prevChapter };
};

export default getAdjacentChapters;
