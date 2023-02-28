import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instalike } from '@jmetterrothan/instalike';
import { Media } from '@jmetterrothan/instalike/dist/types/Instalike';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faCommentDots, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Autres fichiers
import useAppDispatch from '../hooks/useAppDispatch';
import { likepostAsync, unlikePostAsync, followUserFeedAsync, unfollowUserFeedAsync } from '../redux/feed/thunks';
import { followUserPostAction } from '../redux/post/actions';
import { addLikePostAsync, deleteLikePostAsync, followUserPostAsync, unfollowUserPostAsync } from '../redux/post/thunks';
  


// COMPOSANTS
import Comment from './Comment';


type PostProps = {
    post: Instalike.Post;
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
    inFeed: boolean;
};


const Post = ({ post, postid, username, location, time_post, img, caption, isLiked, likes, comments, comment_post, inFeed }: PostProps) => {
const dispatch = useAppDispatch();
const [dropdownOpen, setDropdownOpen] = useState(false);
const [setnavigateToPost] = useState(false);


// Réccupérer le lien du post
async function copyLink(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

return <>
{/* A POST */}
<div className="border rounded-xl bg-white dark:bg-darkblue">
    {/* HEADER POST */}
    <div className="flex justify-between p-4 items-center">
        <div className="flex items-center gap-4">
          <div>
            <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-12 h-12">
                {/* <img src="/src/assets/images/pp_user.png" alt="" /> */}
                <p className="uppercase text-white text-xl">{username.charAt(0)}</p>
            </div>
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
            {!post.owner.isFollowedByViewer && (
                <button className="bg-gray-400 text-white font-bold h-10 rounded-md py-2 px-4" onClick={() => {
                    if (inFeed) {
                      dispatch(followUserFeedAsync(post.id, post.owner.id));
                    } else {
                      dispatch(followUserPostAsync(post.owner.id));
                    }
                  }}
            >follow</button>
            )}
        </div>
        <div className="relative">
            {/* ICON */}
            <div className="w-10 flex justify-center items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FontAwesomeIcon className="text-[22px]" icon={faEllipsisVertical} />
            </div>
            {/* DROPDOWN */}
            <div className={`absolute bg-white rounded border w-32 left-0 mt-2 overflow-hidden ${dropdownOpen ? '' : 'hidden'}`}>
                {post.owner.isFollowedByViewer ? (
                    <button className="hover:bg-gray-200 p-2 font-bold text-red-500 w-full text-left"
                      onClick={() => {
                        if (inFeed) {
                          dispatch(unfollowUserFeedAsync(post.id, post.owner.id));
                        } else {
                          dispatch(unfollowUserPostAsync(post.owner.id));
                        }
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button className="hover:bg-gray-200 p-2 font-bold text-blue-500 w-full text-left"
                      onClick={() => {
                        if (inFeed) {
                          dispatch(followUserFeedAsync(post.id, post.owner.id));
                        } else {
                          dispatch(followUserPostAsync(post.owner.id));
                        }
                      }}
                    >
                      Follow
                    </button>
                  )
                }
                <button className="hover:bg-gray-200 p-2 w-full text-left">
                  <Link to={`/post/${postid}`}>Voir la publication</Link>
                </button>
                <button className="hover:bg-gray-200 p-2 w-full text-left" onClick={() => {
                      copyLink(window.location.origin.toString() + '/post/' + postid);
                    }}
                >Copier le lien</button>
            </div>
        </div>

    </div>
    {/* IMAGE POST */}
    <div className="flex justify-center items-center">
        <img src={img.src} alt="" />
    </div>
    {/* BIO POST */}
    <div className="p-4">
        {caption && <p className="mb-3">{caption}</p>}
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