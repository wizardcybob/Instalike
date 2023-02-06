import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const FeedView = () => {
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
    {/* FEED */}
    <div className="max-w-[640px] mx-auto mt-8 mb-16 px-4">
        {/* STORIES */}
        <ul className="flex gap-8">
            {/* A STORY */}
            <li>
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="rounded-full overflow-hidden w-24 h-24">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <button
                            className="px-2 py-[7px] text-2xl rounded-full bg-gray-300/50 flex items-center justify-center absolute right-0 bottom-0">
                            <FontAwesomeIcon className="text-[14px]" icon={faPlus} />
                        </button>
                    </div>
                    <p className="mt-2">Chloé</p>
                </div>
            </li>
            {/* A STORY */}
            <li>
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="rounded-full overflow-hidden w-24 h-24">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <button
                            className="px-2 py-[7px] text-2xl rounded-full bg-gray-300/50 flex items-center justify-center absolute right-0 bottom-0">
                            <FontAwesomeIcon className="text-[14px]" icon={faPlus} />
                        </button>
                    </div>
                    <p className="mt-2">Chloé</p>
                </div>
            </li>
            {/* A STORY */}
            <li>
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="rounded-full overflow-hidden w-24 h-24">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <button
                            className="px-2 py-[7px] text-2xl rounded-full bg-gray-300/50 flex items-center justify-center absolute right-0 bottom-0">
                            <FontAwesomeIcon className="text-[14px]" icon={faPlus} />
                        </button>
                    </div>
                    <p className="mt-2">Chloé</p>
                </div>
            </li>
        </ul>
        {/* POSTS */}
        <div>
            {/* A POST */}
            <div className="border rounded-xl mt-10 bg-white">
                {/* HEADER POST */}
                <div className="flex justify-between p-4">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden w-12 h-12">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <div>
                            <p className="font-bold">j.metterrothan</p>
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon className="text-[14px]" icon={faLocationDot} />
                                <p className="text-sm mt-[2px]">Italy, 13 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <FontAwesomeIcon className="text-[22px]" icon={faEllipsisVertical} />
                    </div>
                </div>
                {/* IMAGE POST */}
                <div className="flex justify-center items-center">
                    <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                        alt="" />
                </div>
                {/* BIO POST */}
                <div className="p-4">
                    <p className="text-red-500">Quo praesentium facilis voluptatibus consequatur.</p>
                    <div className="flex mt-3 gap-2">
                        <button type="button" className="px-4 py-1 bg-slate-400 rounded-full flex items-center gap-2">
                            <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
                            <span className="mt-1">0</span>
                        </button>
                        <button type="button" className="px-4 flex items-center gap-2">
                            <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
                            <span className="mt-1">0</span>
                        </button>
                    </div>
                </div>
                {/* COMMENTS POST -> à cacher s'il y en a pas */}
                <div className="flex justify-between p-4 border-t-[0.8px]">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden w-8 h-8">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <div>
                            <p><span className="font-bold mr-1">j.metterrothan</span>test</p>
                            <p className="text-sm">7 days ago</p>
                        </div>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </div>
        {/* POSTS */}
        <div>
            {/* A POST */}
            <div className="border rounded-xl mt-10 bg-white">
                {/* HEADER POST */}
                <div className="flex justify-between p-4">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden w-12 h-12">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <div>
                            <p className="font-bold">j.metterrothan</p>
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon className="text-[14px]" icon={faLocationDot} />
                                <p className="text-sm mt-[2px]">Italy, 13 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <FontAwesomeIcon className="text-[22px]" icon={faEllipsisVertical} />
                    </div>
                </div>
                {/* IMAGE POST */}
                <div className="flex justify-center items-center">
                    <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                        alt="" />
                </div>
                {/* BIO POST */}
                <div className="p-4">
                    <p className="text-red-500">Quo praesentium facilis voluptatibus consequatur.</p>
                    <div className="flex mt-3 gap-2">
                        <button type="button" className="px-4 py-1 bg-slate-400 rounded-full flex items-center gap-2">
                            <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
                            <span className="mt-1">0</span>
                        </button>
                        <button type="button" className="px-4 flex items-center gap-2">
                            <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
                            <span className="mt-1">0</span>
                        </button>
                    </div>
                </div>
                {/* COMMENTS POST -> à cacher s'il y en a pas */}
                <div className="flex justify-between p-4 border-t-[0.8px]">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden w-8 h-8">
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                                alt="" />
                        </div>
                        <div>
                            <p><span className="font-bold mr-1">j.metterrothan</span>test</p>
                            <p className="text-sm">7 days ago</p>
                        </div>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</>;
};

export default FeedView;