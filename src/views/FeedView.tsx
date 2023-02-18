import { useEffect } from 'react';
import { Instalike } from '@jmetterrothan/instalike';

// COMPOSANTS
import Navbar from '../components/Navbar';
import UserStory from '../components/UserStory';
import Post from '../components/Post';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import useUserStoryItems from '../hooks/useUserStoryItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';
import { calculateTime } from '../redux/post/thunks';
// import { Link } from 'react-router-dom';


const FeedView = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchFeedUserAsync());
}, []);

const feedItems = useFeedItems();
const userStoryItems = useUserStoryItems(); //ici


return <>
    {/* HEADER */}
    <Navbar />
    {/* FEED */}
    <div className="max-w-[640px] mx-auto mt-8 mb-16 px-4">
        {/* USERS / STORIES */}
        <ul className="flex gap-8">
            {/* USER / STORY */}
            {userStoryItems && //ici
                userStoryItems.map((userstory: Instalike.User) => {
                    console.log("ici" + userstory)

                return (
                    <UserStory key={userstory.id}
                        username={userstory.userName}
                    ></UserStory>
                );
                })
            }
            {/* <UserStory /> */}
        </ul>
        {/* POSTS */}
        {feedItems &&
        feedItems.map((post: Instalike.Post) => {
            console.log(post)

          return (
            // <Link key={post.id} to={`/post/${post.id}`}>
                <Post key={post.id}
                postid={post.id}
                username={post.owner.userName}
                location={post.location}
                time_post={calculateTime(post.createdAt)}
                img={post.resources[0]}
                caption={post.caption}
                isLiked={post.viewerHasLiked}
                likes={post.likesCount}
                comments={post.commentsCount}
                comment_post={post.previewComments}
                ></Post>
            // </Link>
          );
        })}

    </div>
</>;
};

export default FeedView;