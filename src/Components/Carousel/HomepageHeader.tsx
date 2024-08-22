import React from 'react';
import { CarouselTransformer, mangaCardTransformer } from './transformers';
import { getMangaList } from '../../utils/hooks';
import { SeriesInfo } from '../../utils/types';
import LinkingCarousel from './Subcomponents/LinkedCarousel';

const HomepageCourasel = () => {
  const { seriesInfoList } = getMangaList('popular');

  if (!seriesInfoList) return null;

  return (
    <div className="w-full h-[400px]">
      <div className="w-full h-[400px] rounded-xl border-t-transparent relative">
        <div
          className="section-title absolute top-42 flex justify-end z-20 ml-auto w-full rounded-xl text-nowrap text-4xl"
          style={{ textShadow: 'green 2px 1px 5px' }}
        >
          <div className="relative p-4 bg-primary pr-0">
            <div className="absolute top-0 left-0 w-full h-full border-b-2 border-l-2 rounded-bl-2xl" />
            Popular Manga
          </div>
        </div>

        <LinkingCarousel
          children={seriesInfoList.slice(0, 10).map(mangaCardTransformer)}
          setRef={(slider) => {}}
          autoplay
          settingOverride={{
            dots: true,
            appendDots: (dots) => (
              <ul className="absolute bottom-2 left-0 right-0 flex justify-center space-x-6 z-10">
                {dots}
              </ul>
            ),
            customPaging: (i) => (
              <div className="w-12 h-12 border-2 rounded-full overflow-hidden border-green-600 hover:shadow-green-500 hover:shadow-md hover:border-green-900 hover:rounded-full transition-all duration-300 ease-in-out">
                <img
                  className="w-full h-full object-cover "
                  src={seriesInfoList[i].image}
                  alt={seriesInfoList[i].title}
                />
              </div>
            ),
            dotsClass:
              'absolute flex w-full bottom-2 justify-center space-x-12',
          }}
        />
      </div>
    </div>
  );
};

export default HomepageCourasel;
