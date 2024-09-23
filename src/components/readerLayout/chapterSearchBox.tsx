import React, { useEffect, useState } from 'react';
import SearchInputBox from '../advancedSearchBar/searchInputBox';
import { isStringObject } from 'util/types';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFieldHook } from '../../hooks';
import { Chapter } from '../../utils/types';

const ChapterSearchBox = (props: { onHide: () => void }) => {
  const { titleId, chapterId } = useParams();
  const { field: chapterData, loading } = fetchFieldHook<Chapter[] | null>(
    titleId!,
    'chapters',
  );

  const [searchText, setSearchText] = useState('');
  const [chapterList, setChapterList] = useState<Chapter[]>([]);

  const handleSearch = (query: string) => {
    if (!isNaN(Number(query))) {
      console.log(query);
      setSearchText(query);
    }
  };

  useEffect(() => {
    if (chapterData)
      setChapterList(
        chapterData.sort(
          (a, b) => parseFloat(a.chapter_id) - parseFloat(b.chapter_id),
        ),
      );
  }, [chapterData]);

  return (
    <div className="fixed h-screen w-screen left-0">
      <div className="absolute w-64 left-56 h-full bg-secondary">
        <div className="">
          <SearchInputBox
            handleSearch={handleSearch}
            liveSearch
            className="bg-gray-900 mx-0 rounded-sm"
          />
          <div className="results flex-1 flex-col w-full min-h-full overflow-y-auto overflow-x-hidden">
            <div className="h-full">
              {chapterList &&
                chapterList
                  .filter((chapter, index) => {
                    return (
                      !searchText || chapter.chapter_id.startsWith(searchText)
                    );
                  })
                  .map((chapter) => {
                    return (
                      <ChapterResult
                        chapterId={chapter.chapter_id}
                        chapterTitle={chapter.title}
                        selected={chapterId == chapter.chapter_id}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-black/20"
        onClick={() => {
          props.onHide();
        }}
      ></div>
    </div>
  );
};

export default ChapterSearchBox;

const ChapterResult = (props: {
  chapterId: string;
  chapterTitle: string;
  selected: boolean;
}) => {
  const navigate = useNavigate();
  const { titleId } = useParams();
  return (
    <div
      className={`w-full h-12 border-t border-b border-primary text-ellipsis text-nowrap flex flex-col hover:bg-green-600/60 cursor-pointer justify-center p-2 ${
        props.selected && 'bg-green-600/60'
      }`}
      onClick={() => navigate(`/read/${titleId}/${props.chapterId}`)}
    >
      {props.chapterTitle}
    </div>
  );
};
