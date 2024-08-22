import { Chapter } from '../utils/types';

const getAdjacentChapters = async (
  chapters: Chapter[] | null,
  chapterId: string,
) => {
  if (!chapters) {
    return { nextChapter: null, prevChapter: null };
  }
  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.chapter_id === chapterId,
  );
  const nextChapter = chapters[chapterIndex + 1];
  const prevChapter = chapters[chapterIndex - 1];
  console.log(nextChapter, prevChapter);
  return { nextChapter, prevChapter };
};

export default getAdjacentChapters;
