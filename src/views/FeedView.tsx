import { useEffect } from 'react';
import { Instalike } from '@jmetterrothan/instalike';

// COMPOSANTS
import Navbar from '../components/Navbar';
import Suggestion from '../components/Suggestion';
import Post from '../components/Post';
// import { Link } from 'react-router-dom';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import useSuggestionItems from '../hooks/useSuggestionItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';
import { calculateTime } from '../redux/post/thunks';
import { fetchSuggestionAsync } from '../redux/suggestion/thunks';



const FeedView = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchFeedUserAsync());
    }, []);

    useEffect(() => {
        dispatch(fetchSuggestionAsync());
    }, []);   

    const feedItems = useFeedItems();
    const suggestionItems = useSuggestionItems().data;


return <>
    {/* HEADER */}
    <Navbar />
    {/* FEED */}
    <div className="max-w-[640px] mx-auto mt-8 mb-16 px-4">
        {/* USERS / STORIES */}
        <ul className="flex gap-8">
            {/* USER / STORY */}
            {suggestionItems && //ici
                suggestionItems.map((user) => {

                return (
                    <Suggestion key={user.id}
                        firstname={user.firstName}
                    ></Suggestion>
                );
                })
            }
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