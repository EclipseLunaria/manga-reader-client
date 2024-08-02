import React from 'react';
import { useParams } from 'react-router-dom';
import fetchChapterHook from '../../utils/fetchChapterHook';
import ViewerHeader from './ViewHeader';
import fetchFieldHook from '../../utils/fetchSeriesFieldHook';
const ChapterViewer = () => {
  const { titleId, chapterId } = useParams();
  if (!titleId || !chapterId) {
    return <div>Invalid Chapter</div>;
  }
  const { field: titleField } = fetchFieldHook<string>(titleId, 'title');
  const { chapter, loading } = fetchChapterHook(titleId, chapterId);
  const [page, setPage] = React.useState(0);

  const onPageNav = (nav: 'next' | 'prev') => {
    if (!chapter) {
      return;
    }
    if (nav === 'next') {
      if (page < chapter.length - 1) {
        setPage(page + 1);
      }
    } else {
      if (page > 0) {
        setPage(page - 1);
      }
    }
  };
  return (
    <div className="chapter-viewer overflow-x-hidden">
      <ViewerHeader
        title={titleField || ''}
        pgTotal={chapter?.length || 0}
        pgCurrent={page + 1}
        mangaId={titleId}
        chapterId={chapterId}
        onPageNav={onPageNav}
      />
      {loading && <div>Loading...</div>}
      {chapter && (
        <div className="chapter-images flex flex-col w-full">
          <div className="chapter-image-container flex flex-row justify-center m-2 w-full">
            <ClickPageNav onPageNav={onPageNav} />
            <img className="w-80%" src={chapter[page]} alt={`Page ${page}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterViewer;

const ClickPageNav = (props: { onPageNav: (nav: 'next' | 'prev') => void }) => {
  return (
    <div className="click-page-nav-box z-10 absolute h-screen w-full flex justify-between ">
      <div
        className="click-page-nav-button w-full cursor-pointer"
        onClick={() => props.onPageNav('prev')}
      ></div>
      <div
        className="click-page-nav-button w-full cursor-pointer"
        onClick={() => props.onPageNav('next')}
      ></div>
    </div>
  );
};
