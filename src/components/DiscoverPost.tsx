// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const DiscoverPost = () => {
return <>
    {/* A DISCOVER POST */}
    <div className="flex justify-center items-center rounded-2xl overflow-hidden relative">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
            alt="" />
        <div className="flex justify-center items-center bg-gray-900/50 absolute_card inset-0 gap-4">
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
</>;
};

export default DiscoverPost;