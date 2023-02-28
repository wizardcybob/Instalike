import { useEffect } from 'react';
import { Instalike } from '@jmetterrothan/instalike';
import instalikeApi from '../instalikeApi';


// COMPOSANTS
import Navbar from '../components/Navbar';
import DiscoverPost from '../components/DiscoverPost';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';
import { Link } from 'react-router-dom';


const DiscoverView = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   instalikeApi.posts.fetch({ cursor: null });
  //   instalikeApi.users.me.fetch();
  //   instalikeApi.users.find(1).fetch();
  // }, []);

  useEffect(() => {
    dispatch(fetchFeedUserAsync());
  }, []);

  const feedItems = useFeedItems();


return <>
    {/* HEADER */}
    <Navbar />
    {/* ALL DISCOVER POSTS */}
    <div className="max-w-[995px] mx-auto mt-8 mb-16 px-4 flex flex-col items-center sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
      {/* A DISCOVER POST */}
      {feedItems &&
            feedItems.map((post: Instalike.Post) => {
            console.log(post)

          return (
            <Link key={post.id} to={`/post/${post.id}`} className="flex justify-center">
              <DiscoverPost key={post.id}
                img={post.resources[0]}
                likes={post.likesCount}
                comments={post.commentsCount}
              ></DiscoverPost>
            </Link>
          );
        })}
    </div>
  </>;
};

export default DiscoverView;