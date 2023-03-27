import { useState } from 'react';
import { Link } from 'react-router-dom';

// LANGUAGE
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import Language from '../assets/enums/Language';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faSquarePlus, faCircleUser, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const { t,i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* HEADER */}
      <div className="border-b-[0.8px] dark:text-white">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2 h-16">
          <Link to="/feed">
            <h1 className="instalike_title text-[44px]">Instalike</h1>
          </Link>
          <nav className="hidden sm:flex gap-5">
            {/* HOME */}
            <Link to="/feed">
              <FontAwesomeIcon className="text-[24px]" icon={faHome} />
            </Link>
            {/* DISCOVER */}
            <Link to="/discover">
              <FontAwesomeIcon className="text-[24px]" icon={faCompass} />
            </Link>
            {/* ADD PICS */}
            <Link to="/addpost">
              <FontAwesomeIcon className="text-[24px]" icon={faSquarePlus} />
            </Link>
            {/* PROFIL */}
            <Link to="/profile">
              <FontAwesomeIcon className="text-[24px]" icon={faCircleUser} />
            </Link>
            {/* LIGHT/DARK MODE TOGGLE */}
            <button onClick={handleDarkModeToggle}>
              <FontAwesomeIcon className="text-[24px]" icon={isDarkMode ? faMoon : faSun} />
            </button>
          </nav>
          {/* BURGER MENU */}
          <div className="sm:hidden">
            <button onClick={handleMenuToggle}>
              <FontAwesomeIcon className="text-[24px]" icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
      </div>
      {/* RESPONSIVE MENU */}
      {isMenuOpen && (
        <div className="sm:hidden border absolute right-0 z-10  bg-white dark:bg-darkblue"> {/*inset-x-0*/}
          <nav className="flex flex-col gap-5 p-4">
            {/* HOME */}
            <Link to="/feed" onClick={handleMenuToggle} className="flex items-center gap-3">
              <FontAwesomeIcon className="text-[24px]" icon={faHome} />
              <p className="text-start">{t('menu.home')}</p>
            </Link>
            {/* DISCOVER */}
            <Link to="/discover" onClick={handleMenuToggle} className="flex items-center gap-3">
              <FontAwesomeIcon className="text-[24px]" icon={faCompass} />
              <p className="text-start">{t('menu.discover')}</p>
            </Link>
            {/* ADD PICS */}
            <Link to="/addpost" onClick={handleMenuToggle} className="flex items-center gap-3">
              <FontAwesomeIcon className="text-[24px]" icon={faSquarePlus} />
              <p className="text-start">{t('menu.add_post')}</p>
            </Link>
            {/* PROFIL */}
            <Link to="/profile" onClick={handleMenuToggle} className="flex items-center gap-3">
              <FontAwesomeIcon className="text-[24px]" icon={faCircleUser} />
              <p className="text-start">{t('menu.my_profile')}</p>
            </Link>
            {/* LIGHT/DARK MODE TOGGLE */}
            <button onClick={handleDarkModeToggle} className="flex items-center gap-3">
              <FontAwesomeIcon className="text-[24px]" icon={isDarkMode ? faMoon : faSun} />
              <p className="text-start">{isDarkMode ? "Mode sombre" : "Mode clair"}</p>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
