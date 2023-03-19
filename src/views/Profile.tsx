import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/auth/thunks';

// LANGUAGE
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import Language from '../assets/enums/Language';

// COMPOSANTS
import Navbar from '../components/Navbar';
import DiscoverPost from '../components/DiscoverPost';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import { fetchProfileAsync } from '../redux/feed/thunks';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';


const Profile = () => {
    const { t,i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProfileAsync());
    }, []);

    const feedItems = useFeedItems();


return <>
    {/* HEADER */}
    <Navbar />
    {/* PROFILEVIEW */}
    <div className="max-w-[640px] mx-auto py-16 px-4">
        <div className="flex flex-col items-center justify-center">
            {/* HEADER PROFILEVIEW */}
            <div className="flex flex-col sm:flex-row items-center w-full gap-[30px] pb-8 border-b-2">
                {/* ZONE PROFILE PIC */}
                <div className="w-[292px] flex justify-center">
                    <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-[150px] h-[150px]">
                        <p className="uppercase text-white text-[38px]">X</p>
                    </div>
                </div>
                {/* INFOS COMPTE */}
                <div className="flex flex-col gap-[30px] sm:gap-4">
                    <div className="flex gap-5 justify-center items-center">
                        <p className="text-xl">Chloé</p>
                        <button className="bg-red-600 hover:bg-red-800 text-white font-bold h-10 rounded-md py-2 px-4" onClick={() => {
                            dispatch(logoutAsync());
                            }}>Se déconnecter</button>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col items-center">
                            <p>XX</p>
                            <p>posts</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>XX</p>
                            <p>followers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>XX</p>
                            <p>follow</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* CHANGEMENT DE LANGUE */}
            <div className="flex flew-wrap gap-10 mt-10">
                <button className="bg-blue-500 text-white font-bold h-10 rounded-md py-2 px-4"
                type="button"
                onClick={() => {
                    i18n.changeLanguage(Language.EN);
                }}
                >
                    {t('languages.english')}
                </button>
                <button className="bg-blue-500 text-white font-bold h-10 rounded-md py-2 px-4"
                type="button"
                onClick={() => {
                    i18n.changeLanguage(Language.FR);
                }}
                >
                    {t('languages.french')}
                </button>
            </div>
            <p className="mt-8 text-center">{t('languages.actual')}</p>
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
                        <p className="font-bold text-xl text-center">Votre discover est vide...</p>
                        <p className="text-center">Ajouter un post pour remplir votre discover&nbsp;!</p>
                        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold h-10 rounded-md py-2 px-4">
                        <Link to="/addpost">Ajouter un post</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>


</>;
};

export default Profile;