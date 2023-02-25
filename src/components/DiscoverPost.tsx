import { Instalike } from '@jmetterrothan/instalike';
import { Media } from '@jmetterrothan/instalike/dist/types/Instalike';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons';


type DiscoverPostProps = {
    img: Media;
    likes: number;
    comments: number;
};


const DiscoverPost = ({ img, likes, comments }: DiscoverPostProps) => {

return <>
    {/* A DISCOVER POST */}
    <div className="flex justify-center items-center rounded-2xl relative w-[315px] h-[315px] overflow-hidden">
        <img className="objet-cover w-full h-full" src={img.src} alt="" />
        <div className="flex justify-center items-center bg-gray-900/50 absolute_card inset-0 gap-4">
            <div className="px-2 flex items-center gap-2 text-white">
                <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
                <span className="mt-1">{likes}</span>
            </div>
            <div className="px-2 flex items-center gap-2 text-white">
                <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
                <span className="mt-1">{comments}</span>
            </div>
        </div>
    </div>

</>;
};

export default DiscoverPost;