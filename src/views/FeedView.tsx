import { useEffect } from 'react';
import { Instalike } from '@jmetterrothan/instalike';

// COMPOSANTS
import Navbar from '../components/Navbar';
import UserStory from '../components/UserStory';
import Post from '../components/Post';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import { fetchFeedUserAsync, calculateTime } from '../redux/feed/thunks';


const FeedView = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchFeedUserAsync());
}, []);

const feedItems = useFeedItems();


return <>
    {/* HEADER */}
    <Navbar />
    {/* FEED */}
    <div className="max-w-[640px] mx-auto mt-8 mb-16 px-4">
        {/* USERS / STORIES */}
        <ul className="flex gap-8">
            {/* USER / STORY */}
            <li>
                <UserStory />
            </li>
            <li>
                <UserStory />
            </li>
            <li>
                <UserStory />
            </li>
        </ul>
        {/* POSTS */}
        {feedItems &&
        feedItems.map((post: Instalike.Post) => {
            console.log(post)
           
            const time_post = calculateTime(post.createdAt);

          return (
            <Post key={post.id}
              username={post.owner.userName}
              location={post.location}
              time_post={time_post}
              img={post.resources[0]}
              caption={post.caption}
              isLiked={post.viewerHasLiked}
              likes={post.likesCount}
              comments={post.commentsCount}
              comment_post={post.previewComments}
            ></Post>
          );
        })}

    </div>
</>;
};

export default FeedView;