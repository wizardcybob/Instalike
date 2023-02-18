import { Instalike } from '@jmetterrothan/instalike';
import { Media } from '@jmetterrothan/instalike/dist/types/Instalike';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faCommentDots, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Autres fichiers
import useAppDispatch from '../hooks/useAppDispatch';
import { likepostAsync, unlikePostAsync } from '../redux/feed/thunks';
import { useState } from 'react';

// COMPOSANTS
import Comment from './Comment';


type PostProps = {
    postid: number;
    username: string;
    location: string | null;
    time_post: string | null;
    img: Media;
    caption?: string;
    isLiked: boolean;
    likes: number;
    comments: number;
    comment_post: Instalike.Comment[];
};


const Post = ({ postid, username, location, time_post, img, caption, isLiked, likes, comments, comment_post }: PostProps) => {
const dispatch = useAppDispatch();



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
        {caption && <p className="text-red-500 mb-3">{caption}</p>}
        <div className="flex gap-2">
            {isLiked ? (
                <button className={`px-4 py-1 bg-${isLiked ? 'red-500' : 'gray-400'} rounded-full flex items-center gap-2`}
                  onClick={() => {
                    dispatch(unlikePostAsync(postid));
                  }}
                >
                    <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
                    <span className="mt-1">{likes}</span>
                </button>
              ) : (
                <button className={`px-4 py-1 bg-${isLiked ? 'red-500' : 'gray-400'} rounded-full flex items-center gap-2`}
                  onClick={() => {
                    dispatch(likepostAsync(postid));
                  }}
                >
                  <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
                    <span className="mt-1">{likes}</span>
                </button>
              )}

            <button type="button" className="px-4 flex items-center gap-2">
                <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
                <span className="mt-1">{comments}</span>
            </button>
        </div>
    </div>
    {/* COMMENTS POST */}
    <div className={`border-t-${comments > 0 ? '[0.8px] p-4' : '0' } flex flex-col gap-4`}>
        <Comment tab_comments={comment_post}></Comment>
    </div>
</div>
</>;
};

export default Post;