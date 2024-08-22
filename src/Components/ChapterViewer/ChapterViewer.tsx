import React from 'react';
import { useParams } from 'react-router-dom';
import ViewerHeader from './ViewHeader';
import ClickPageNav from './ClickPageNav';
import { fetchFieldHook, fetchChapterHook } from '../../hooks';

const ChapterViewer = () => {
  const { titleId, chapterId } = useParams();
  if (!titleId || !chapterId) {
    return <div>Invalid Chapter</div>;
  }
  const { field: titleField } = fetchFieldHook<string>(titleId, 'title');
  const { chapter, loading } = fetchChapterHook(titleId, chapterId);
  const [page, setPage] = React.useState(0);

  const onPageNav = (nav: number | 'next' | 'prev') => {
    if (!chapter) {
      return;
    }
    if (nav === 'next') {
      if (chapter && page < chapter.length - 1) {
        setPage(page + 1);
      }
    }

    if (nav === 'prev') {
      if (page > 0) {
        setPage(page - 1);
      }
    }
    if (typeof nav === 'number') {
      setPage(nav);
    }
  };

  return (
    <div className="chapter-viewer overflow-x-hidden h-full">
      <ViewerHeader
        title={titleField || ''}
        pgTotal={chapter?.length || 0}
        pgCurrent={page + 1}
        mangaId={titleId}
        chapterId={chapterId}
        chapters={chapter}
        onSetPage={onPageNav}
      />
      {loading && <div>Loading...</div>}
      {chapter && (
        <div className="chapter-images flex flex-col w-full h-full">
          <div className="chapter-image-container flex flex-row justify-center m-2 w-full h-full">
            <img className="w-80% " src={chapter[page]} alt={`Page ${page}`} />
            <ClickPageNav onPageNav={onPageNav} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterViewer;
