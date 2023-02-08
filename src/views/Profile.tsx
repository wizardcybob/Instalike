import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useAppDispatch from '../hooks/useAppDispatch';
import { logoutAsync } from '../redux/auth/thunks';

const Profile = () => {
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
    </div>
</>;
};

export default Profile;