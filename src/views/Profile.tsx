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
                        <button className="bg-red-500 text-white font-bold h-10 rounded-md py-2 px-4" onClick={() => {
                            dispatch(logoutAsync());
                            }}>Se déconnecter</button>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col items-center">
                            <p>XX</p>
                            <p>publications</p>
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
    </div>


</>;
};

export default Profile;