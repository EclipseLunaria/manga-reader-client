import React from 'react';
import { mangaCardTransformer } from './transformers';
import { getMangaList } from '../../hooks';
import LinkingCarousel from './Subcomponents/LinkedCarousel';
import { SearchCategory } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

const Courasel = (props: {
  carouselType: SearchCategory;
  titleText: string;
  navDestination?: string;
}) => {
  const { seriesInfoList } = getMangaList(props.carouselType);
  const navigate = useNavigate();
  if (!seriesInfoList) return null;

  return (
    <div className="w-full h-[400px] relative mb-24">
      <div className="w-full h-[400px] rounded-xl border-t-transparent relative">
        <div
          className="section-title absolute top-42 flex justify-end z-20 ml-auto w-full rounded-xl text-nowrap text-4xl"
          style={{ textShadow: 'green 2px 1px 5px' }}
        >
          <div
            className="overflow-hidden pb-4 pl-4"
            onClick={() => {
              props.navDestination && navigate(props.navDestination);
            }}
          >
            <div className="relative p-4 bg-primary pr-0">
              <div className="absolute  top-0 left-0 w-full h-full border-b-2 border-l-2 rounded-bl-2xl cursor-pointer transition-shadow hover:shadow-md hover:shadow-green-700 " />
              {props.titleText}
            </div>
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

export default Courasel;
