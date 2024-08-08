import React from 'react';
import { useNavigate } from 'react-router-dom';
import LostMiku from '../assets/LostMiku.png';
const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex">
      <div className="missing-win-constainer overflow-hidden w-[1200px] h-[900px] bg-secondary border-2 border-cyan-500 border-solid rounded-md m-auto">
        <div className="missing-win-header bg-gradient-to-b from-cyan-300 to-cyan-500 h-12 w-full border-b-2 border-cyan-500 flex">
          <div className="my-auto text-4xl pl-4">Error message...</div>
          <div
            onClick={() => {
              navigate('/');
            }}
            className="close-btn ml-auto h-8 w-8 my-auto mr-4 flex justify-center border-white border-2 rounded-md text-xl text-white cursor-pointer hover:bg-red-500 bg-red-600 transition-colors"
          >
            X
          </div>
        </div>
        <div className="missing-win-body relative h-full w-full flex">
          <div className="relative h-1/3 m-4 w-1/2  z-20 bg-gradient-to-b from-cyan-400 bg-opacity-40 rounded-xl ">
            <div className="text-center text-6xl m-8">Error: 404</div>
            <div className="text-center text-5xl">
              The Page You Seek Does Not Exist
            </div>
            <div className="text-center text-4xl border-2 w-1/2 mx-auto rounded-md m-8 transition-colors cursor-pointer p-2 bg-cyan-400 hover:bg-cyan-300">
              Back To Home
            </div>
          </div>
          <img src={LostMiku} alt="404" className="mx-auto absolute z-0" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
