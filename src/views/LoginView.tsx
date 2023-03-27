import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import useAuthInterceptors from '../hooks/useAuthInterceptors';
import { loginAsync } from '../redux/auth/thunks';
import useIsAuth from '../hooks/useIsAuth';


const LoginView = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const isAuth = useIsAuth();

    if (isAuth) {
        return <Navigate to="feed" />
    }
    return <>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="instalike_title text-[64px] leading-[76px]">Instalike</h1>
            <form action="" className="flex flex-col gap-4 w-[348px] mt-4" onSubmit={function(e) {
                e.preventDefault();
                dispatch(loginAsync(email, password))
                .catch((e) => setMessage(e.response.data.message));
            }}>
                <p className="text-lg">Welcome !</p>
                <input id="email" className="px-4 bg-gray-200 h-12 rounded-md" type="email" name="email" placeholder="Adresse mail" required onChange={(e) => {
              setEmail(e.target.value);
            }}></input>
                <input id="password" className="px-4 bg-gray-200 h-12 rounded-md" type="password" name="password" placeholder="Mot de passe" required onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 rounded-md mt-2">Login</button>
            </form>
        </div>
    </>;
};

export default LoginView;