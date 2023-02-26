import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useAppDispatch from '../hooks/useAppDispatch';
import { logoutAsync } from '../redux/auth/thunks';

// LANGUAGE
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import Language from '../assets/enums/Language';




const Profile = () => {
    const { t,i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


return <>
    {/* HEADER */}
    <Navbar />
    {/* PROFILE */}
    <div className="flex flex-col items-center justify-center h-screen">
        <p>Bonjour Chloé</p>
        <button className="bg-red-500 text-white font-bold h-10 rounded-md mt-2 py-2 px-4" onClick={() => {
            dispatch(logoutAsync());
            }}>Se déconnecter</button>
        {/* CHANGEMENT DE LANGUE */}
        <div className="flex gap-10 mt-10">
            <button className="bg-blue-500 text-white font-bold h-10 rounded-md mt-2 py-2 px-4"
            type="button"
            onClick={() => {
                i18n.changeLanguage(Language.EN);
            }}
            >
            {t('languages.english')}
            </button>
            <button className="bg-blue-500 text-white font-bold h-10 rounded-md mt-2 py-2 px-4"
            type="button"
            onClick={() => {
                i18n.changeLanguage(Language.FR);
            }}
            >
            {t('languages.french')}
            </button>
        </div>
        <p>{t('languages.aaa')}</p>
    </div>


</>;
};

export default Profile;