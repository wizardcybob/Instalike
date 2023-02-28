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

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';


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
    <div className="max-w-[995px] mx-auto mt-8 mb-16 px-4 flex flex-col items-center">
      {/* A DISCOVER POST */}
      {feedItems && feedItems.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
      ) : (
        <div className="flex flex-col items-center gap-4 mt-20">
            <FontAwesomeIcon className="text-[96px]" icon={faCompass} />
            <p className="font-bold text-xl">Votre discover est vide...</p>
            <p className="text-center">Ajouter un post pour remplir votre discover&nbsp;!</p>
            <button className="bg-gray-400 text-white font-bold h-10 rounded-md py-2 px-4">
              <Link to="/addpost">Ajouter un post</Link>
            </button>
        </div>
      )}
    </div>
  </>;
};

export default DiscoverView;