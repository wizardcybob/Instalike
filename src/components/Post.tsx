import { Media, Comment } from '@jmetterrothan/instalike/dist/types/Instalike';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faCommentDots, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { calculateTime } from '../redux/feed/thunks';

// COMPOSANTS
// import Comment from '../components/Comment';

type PostProps = {
    username: string;
    location: string | null;
    time_post: string | null;
    img: Media;
    caption?: string;
    isLiked: boolean;
    likes: number;
    comments: number;
    comment_post: Comment,
};


const Post = ({ username, location, time_post, img, caption, isLiked, likes, comments, comment_post }: PostProps) => {

return <>
{/* A POST */}
<div className="border rounded-xl mt-10 bg-white">
    {/* HEADER POST */}
    <div className="flex justify-between p-4">
        <div className="flex items-center gap-4">
            <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-12 h-12">
                {/* <img src="/src/assets/images/pp_user.png" alt="" /> */}
                <p className="uppercase text-white">{username.charAt(0)}</p>
            </div>
            <div>
                <p className="font-bold">{username}</p>
                {location &&
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon className="text-[14px]" icon={faLocationDot} />
                        <p className="text-sm mt-[2px]">{location}, {time_post}</p>
                    </div>
                }
            </div>
        </div>
        <div className="w-10 flex justify-center items-center">
            <FontAwesomeIcon className="text-[22px]" icon={faEllipsisVertical} />
        </div>
    </div>
    {/* IMAGE POST */}
    <div className="flex justify-center items-center">
        <img src={img.src} alt="" />
    </div>
    {/* BIO POST */}
    <div className="p-4">
        <p className="text-red-500">{caption}</p>
        <div className="flex mt-3 gap-2">
        <button type="button" className={`px-4 py-1 bg-${isLiked ? 'red-500' : 'slate-400'} rounded-full flex items-center gap-2`}>
                <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
                <span className="mt-1">{likes}</span>
            </button>
            <button type="button" className="px-4 flex items-center gap-2">
                <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
                <span className="mt-1">{comments}</span>
            </button>
        </div>
    </div>
    {/* COMMENTS POST -> faire un composant "Comment" ? */}
    <div className="border-t-[0.8px] p-4 flex flex-col gap-4">
    {comment_post && comment_post.map((comment, index) => (
        <div key={index} className="flex justify-between">
            <div className="flex items-center gap-4">
            <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-8 h-8">
                {/* <img src="/src/assets/images/pp_user.png" alt="" /> */}
                <p className="uppercase text-white">{comment.owner.userName.charAt(0)}</p>
            </div>
            <div>
                <p><span className="font-bold mr-1">{comment.owner.userName}</span>{comment.text}</p>
                <p className="text-sm">7 days ago</p>
            </div>
            </div>
            <div className="w-10 flex justify-center items-center">
                <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} /> {/* à afficher que si on est l'auteur du com */}
            </div>
            {/* afficher cet icon que si on est l'auteur du com */}
            {/* <div className="w-10 flex justify-center items-center">
                {comment.owner.userName === currentUser && (
                    <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} />
                )}
            </div> */}
        </div>
    ))}
    </div>

</div>
</>;
};

export default Post;