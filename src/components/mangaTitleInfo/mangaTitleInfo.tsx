import React from 'react';
import { SeriesInfo } from '../../utils/types';
import TitleCoverBackground from './titleCoverBackground';
import MangaHeaderImage from './mangaHeaderImage';
import MangaHeaderBox from './mangaHeaderBox';
import MangaDescriptionBox from './mangaDescriptionBox';
import MetaSectionBox from './metaSectionBox';
import ChapterSection from './chapterSection';
import { useParams } from 'react-router-dom';
const MangaTitleInfo = (props: SeriesInfo) => {
  const { titleId } = useParams();
  if (!titleId) {
    return <div>Invalid Title</div>;
  }
  return (
    <div className="manga-title-info relative text-white flex flex-col">
      <TitleCoverBackground cover={props.image} title={props.title} />
      <div className="series-header-container flex flex-row w-full ">
        <MangaHeaderImage image={props.image} />

        <MangaHeaderBox title={props.title} author={props.author} />
      </div>

      <MangaDescriptionBox description={props.description} />

      <div className="content-section flex flex-row justify-between p-4">
        <div className="series-meta-info w-1/2">
          <MetaSectionBox
            author={props.author}
            genres={props.genres}
            status={props.status}
          />
        </div>
        <div className="series-chapters w-full">
          <ChapterSection chapters={props.chapters} mangaId={titleId} />
        </div>
        {/* {JSON.stringify(props, null, 2)} */}
      </div>
    </div>
  );
};

export default MangaTitleInfo;
