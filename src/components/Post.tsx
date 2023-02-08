// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faCommentDots, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


const Post = () => {
return <>
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
</>;
};

export default Post;