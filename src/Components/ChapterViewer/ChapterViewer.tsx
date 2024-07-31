import React from 'react';
import { useParams } from 'react-router-dom';
import fetchChapterHook from '../../utils/fetchChapterHook';

const ChapterViewer = () => {
  const { titleId, chapterId } = useParams();
  if (!titleId || !chapterId) {
    return <div>Invalid Chapter</div>;
  }
  const { chapter, loading } = fetchChapterHook(titleId, chapterId);

  return (
    <div className="chapter-viewer overflow-x-hidden">
      {loading && <div>Loading...</div>}
      {chapter && (
        <div className="chapter-images flex flex-col w-full">
          {chapter.map((image, index) => (
            <div
              key={index}
              className="chapter-image-container flex flex-row justify-center m-2 w-full"
            >
              <img key={index} src={image} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterViewer;
