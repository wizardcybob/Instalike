import { useEffect } from 'react';
import { Instalike } from '@jmetterrothan/instalike';
import instalikeApi from '../instalikeApi';
import { Link } from 'react-router-dom';

// LANGUAGE
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import Language from '../assets/enums/Language';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// COMPOSANTS
import Navbar from '../components/Navbar';
import Suggestion from '../components/Suggestion';
import Post from '../components/Post';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import useSuggestionItems from '../hooks/useSuggestionItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';
import { calculateTime } from '../redux/post/thunks';
import { fetchSuggestionAsync } from '../redux/suggestion/thunks';



const FeedView = () => {
    const { t,i18n } = useTranslation();
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     console.log('fetch');
    //     instalikeApi.posts.fetch({ cursor: null });
    //     instalikeApi.users.me.fetch();
    //     instalikeApi.users.find(1).fetch();
    //   }, []);
    
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
    {/* FEEDVIEW */}
    <div className="max-w-[640px] mx-auto mt-8 mb-16 px-4">
        {/* USERS / STORIES */}
        <ul className="flex flex-wrap justify-center gap-8">
            {/* USER / STORY */}
            {suggestionItems && //ici
                suggestionItems.map((user) => {

                return (
                    <Suggestion key={user.id}
                        user={user}
                    ></Suggestion>
                );
                })
            }
        </ul>
        {feedItems && feedItems.length > 0 ? (
            <div className="flex flex-col gap-10 mt-10">
                {/* POSTS */}
                {feedItems.map((post: Instalike.Post) => {
                    console.log(post)

                    return (
                        <Post post={post} key={post.id}
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
                        inFeed={true}
                        ></Post>
                    );
                })}
                <p className="font-bold text-center">{t('feed_view.text1')}</p>
            </div>
        ) : (
            <div className="flex flex-col items-center gap-4 mt-20">
                <FontAwesomeIcon className="text-[96px]" icon={faHouse} />
                <p className="font-bold text-xl text-center">{t('feed_view.text2')}</p>
                <p className="text-center">{t('feed_view.text3')}</p>
                <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold h-10 rounded-md py-2 px-4">
                  <Link to="/discover">{t('feed_view.text_btn1')}</Link>
                </button>
            </div>
        )}


    </div>
</>;
};

export default FeedView;