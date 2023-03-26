import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

// LANGUAGE
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import Language from '../assets/enums/Language';

// COMPOSANTS
import Navbar from '../components/Navbar';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import usePost from '../hooks/usePostItems';
import { addPost } from '../redux/post/thunks';


const AddPostView = () => {
    const { t,i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const [selectedImg, setSelectedImg] = useState<File[]>([]);
    const [location, setLocation] = useState("");
    const [caption, setCaption] = useState("");
    const [hasCommentsDisabled, setComment] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const post = usePost().items || { id: -1 }; // Initialisation de post avec un objet par défaut

    useEffect(() => {
    post.id = -1;
    }, []);

    useEffect(() => {
    if (post.id !== -1) {
    setRedirect(true);
    }
    }, [post.id]);

    return (
    <>
        {/* HEADER */}
        <Navbar />
        {/* MODAL */}
        <div className="max-w-[640px] px-4 mx-auto">
            <div className="p-6 border rounded-xl mt-10 flex flex-col">
                <p className="text-center font-bold text-2xl">{t('addpost_view.title')}</p>
                <form className="flex flex-col gap-4 mt-6" onSubmit={(event)=> {
                    event.preventDefault();
                    dispatch(addPost(selectedImg, location, caption, hasCommentsDisabled)); //ajouter les autres éléments (accessibilityCaption, hasCommentsDisabled) ?
                }}>
                    {/* IMAGE */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="image-upload" className="font-bold">{t('addpost_view.image')} :</label>
                        <input type="file" accept="image/*" id="image-upload" onChange={(test)=> {
                            if (test.target.files) {
                            setSelectedImg(selectedImg.concat(test.target.files[0]));
                            }
                        }}
                        />
                    </div>
                    {/* LOCATION */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="location-input" className="font-bold">{t('addpost_view.place')} :</label>
                        <input className="h-10 p-2 rounded-sm border dark:text-darkblue" id="location-input" placeholder={t('addpost_view.place_placeholder')} value={location} onChange={(e)=>
                        setLocation(e.target.value)} />
                    </div>
                    {/* DESCRIPTION */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="caption-input" className="font-bold">{t('addpost_view.caption')} :</label>
                        <input className="h-10 p-2 rounded-sm border dark:text-darkblue" id="caption-input" placeholder={t('addpost_view.caption_placeholder')} value={caption} onChange={(e)=>
                        setCaption(e.target.value)} />
                    </div>
                    {/* POSSIBILITE DE COMMENTER */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="comment-checkbox" className="font-bold">{t('addpost_view.text1')} :</label>
                        <input className="w-4 h-4" type="checkbox" id="comment-checkbox" checked={hasCommentsDisabled} onChange={(e) => setComment(e.target.checked)} />
                    </div>
                    {/* BTNS */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {/* CANCEL BTN */}
                        <Link to="/feed">
                        <button
                            className="bg-red-600 hover:bg-red-800 text-white font-bold h-10 rounded-md mt-2 uppercase w-full">{t('actions.cancel')}</button>
                        </Link>
                        {/* SUBMIT BTN */}
                        <button className="bg-green-700 hover:bg-green-900 text-white font-bold h-10 rounded-md mt-2 uppercase w-full" type="submit">
                            {t('actions.send')}
                        </button>
                    </div>
                </form>

                {redirect &&
                <Navigate to={'post/' + post.id} replace={true} />}
            </div>
        </div>

    </>
    );
};

export default AddPostView;