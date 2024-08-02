import React from 'react';
import fetchFieldHook from '../../utils/fetchSeriesFieldHook';
import { Chapter } from '../../utils/getSeriesInfoHook';
import { useNavigate } from 'react-router-dom';
const ChapterSelector = (props: { mangaId: string }) => {
  const navigate = useNavigate();

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

  return (
    <div className="chapter-selector w-full bg-transparent p-2 ">
      <select
        className="chapter-select w-full bg-secondary p-2 rounded-lg"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>
          Select a chapter
        </option>
        {options}
      </select>
    </div>
  );
};

export default ChapterSelector;
