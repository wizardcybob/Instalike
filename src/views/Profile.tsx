
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import { logoutAsync } from '../redux/auth/thunks';

const Profile = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

return <>
    {/* PROFILE */}
    <div className="flex flex-col items-center justify-center h-screen">
        <button className="bg-red-400 text-white font-bold h-10 rounded-md mt-2 p-2" onClick={() => {
            dispatch(logoutAsync());
            }}>Se déconnecter</button>
    </div>
</>;
};

export default Profile;