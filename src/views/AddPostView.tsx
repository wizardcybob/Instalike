import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

// COMPOSANTS
import Navbar from '../components/Navbar';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import usePost from '../hooks/usePostItems';
import { addPost } from '../redux/post/thunks';

const AddPostView = () => {
const dispatch = useAppDispatch();
const [selectedImg, setSelectedImg] = useState<File[]>([]);
    const [location, setLocation] = useState("");
    const [caption, setCaption] = useState("");
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
        <div className="max-w-[640px] mx-auto p-6 border rounded-xl mt-10 bg-white flex flex-col">
            <p className="text-center font-bold text-2xl">Créer un post</p>
            <form className="flex flex-col gap-4 mt-6">
                {/* IMAGE */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="image-upload" className="font-bold">Ajouter une image :</label>
                    <input type="file" accept="image/*" id="image-upload" onChange={(test)=> {
                        if (test.target.files) {
                        setSelectedImg(selectedImg.concat(test.target.files[0]));
                        }
                    }}
                    />
                </div>
                {/* LOCATION */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="location-input" className="font-bold">Lieu :</label>
                    <input className="h-10 p-2 rounded-sm border" id="location-input" placeholder="Lieu" value={location} onChange={(e)=>
                    setLocation(e.target.value)} />
                </div>
                {/* DESCRIPTION */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="caption-input" className="font-bold">Description :</label>
                    <input className="h-10 p-2 rounded-sm border" id="caption-input" placeholder="Description" value={caption} onChange={(e)=>
                    setCaption(e.target.value)} />
                </div>
                {/* BTNS */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* CANCEL BTN */}
                    <Link to="/feed">
                    <button
                        className="bg-red-600 text-white font-bold h-10 rounded-md mt-2 uppercase w-full">Annuler</button>
                    </Link>
                    {/* SUBMIT BTN */}
                    <button className="bg-green-700 text-white font-bold h-10 rounded-md mt-2 uppercase w-full"
                        onClick={(test)=> {
                            dispatch(addPost(selectedImg, location, caption)); //ajouter les autres éléments (accessibilityCaption, hasCommentsDisabled) ?
                        }}
                        >
                        Envoyer
                    </button>
                </div>
            </form>

            {redirect &&
            <Navigate to={'post/' + post.id} replace={true} />}
        </div>

    </>
    );
    };

    export default AddPostView;