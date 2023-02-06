import { useEffect } from 'react';

import instalikeApi from '../instalikeApi';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';


const DiscoverView = () => {
  useEffect(() => {
    instalikeApi.posts.fetch({ cursor: null });
    instalikeApi.users.me.fetch();
    instalikeApi.users.find(1).fetch();
  }, []);

  return <>
    {/* HEADER */}
    <div className="border-b-[0.8px]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2 h-16">
            <h1 className="instalike_title text-[44px]">Instalike</h1>
            <nav className="flex gap-5">
                {/* HOME */}
                <a href="">
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="28" alt="" /> */}
                    <FontAwesomeIcon className="text-[24px]" icon={faHouse} />
                </a>
                {/* DISCOVER */}
                <a href="">
                    <FontAwesomeIcon className="text-[24px]" icon={faCompass} />
                </a>
                {/* ADD PICS */}
                <a href="">
                    <FontAwesomeIcon className="text-[24px]" icon={faSquarePlus} />
                </a>
                {/* PROFIL */}
                <a href="">
                    <FontAwesomeIcon className="text-[24px]" icon={faCircleUser} />
                </a>
                {/* LIGHT/DARK MODE */}
                <a href="">
                    <FontAwesomeIcon className="text-[24px]" icon={faMoon} />
                </a>
            </nav>
        </div>
    </div>
    {/* ALL POSTS */}
    <div className="max-w-[995px] mx-auto mt-8 mb-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {/* A POST */}
      <div className="flex justify-center items-center rounded-2xl overflow-hidden relative">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
            alt="" />
        <div className="flex justify-center items-center bg-gray-900/50 absolute inset-0 gap-4">
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
            <span className="mt-1">0</span>
          </button>
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
            <span className="mt-1">0</span>
          </button>
        </div>
      </div>
      {/* A POST */}
      <div className="flex justify-center items-center rounded-2xl overflow-hidden relative">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
            alt="" />
        <div className="flex justify-center items-center bg-gray-900/50 absolute inset-0 gap-4">
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
            <span className="mt-1">0</span>
          </button>
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
            <span className="mt-1">0</span>
          </button>
        </div>
      </div>
      {/* A POST */}
      <div className="flex justify-center items-center rounded-2xl overflow-hidden relative">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
            alt="" />
        <div className="flex justify-center items-center bg-gray-900/50 absolute inset-0 gap-4">
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
            <span className="mt-1">0</span>
          </button>
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
            <span className="mt-1">0</span>
          </button>
        </div>
      </div>
      {/* A POST */}
      <div className="flex justify-center items-center rounded-2xl overflow-hidden relative">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
            alt="" />
        <div className="flex justify-center items-center bg-gray-900/50 absolute inset-0 gap-4">
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
            <span className="mt-1">0</span>
          </button>
          <button className="px-2 flex items-center gap-2 text-white">
            <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
            <span className="mt-1">0</span>
          </button>
        </div>
      </div>
    </div>
  </>;
};

export default DiscoverView;