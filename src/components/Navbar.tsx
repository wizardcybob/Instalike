import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faSquarePlus, faCircleUser, faMoon } from '@fortawesome/free-regular-svg-icons';


import { Link } from 'react-router-dom';


const Navbar = () => {
return <>
    {/* HEADER */}
    <div className="border-b-[0.8px]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2 h-16">
            <h1 className="instalike_title text-[44px]">Instalike</h1>
            <nav className="flex gap-5">
                {/* HOME */}
                <Link to="/feed">
                    <FontAwesomeIcon className="text-[24px]" icon={faHouse} />
                </Link>
                {/* DISCOVER */}
                <Link to="/discover">
                    <FontAwesomeIcon className="text-[24px]" icon={faCompass} />
                    </Link>
                {/* ADD PICS */}
                <a href="#">
                    <FontAwesomeIcon className="text-[24px]" icon={faSquarePlus} />
                </a>
                {/* PROFIL */}
                <a href="#">
                    <FontAwesomeIcon className="text-[24px]" icon={faCircleUser} />
                </a>
                {/* LIGHT/DARK MODE */}
                <a href="#">
                    <FontAwesomeIcon className="text-[24px]" icon={faMoon} />
                </a>
            </nav>
        </div>
    </div>
</>;
};

export default Navbar;