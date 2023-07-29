import { BurgerIcon, CrossIcon } from '@Icon';
import { Auth, Button } from '@components';
import useLocalStorage from '@hooks';
import { useLocalStorageDataContext } from '@context';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type NavLinkItem = {
  name: string;
  routeName: string;
  key: number;
};

type NavLinksType = {
  navLinks: Array<NavLinkItem>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonPress: () => void;
  onLogoutClick: () => void;
  userData: { id: string; email: string } | null;
};

function NavLinksRender({
  navLinks,
  setIsOpen,
  onButtonPress,
  userData,
  onLogoutClick,
}: NavLinksType) {
  const profileRoute = { name: 'Profile', routeName: '/profile', key: 6 };
  return (
    <>
      {navLinks.map((element) => {
        return (
          <Link
            to={element.routeName}
            key={element.key}
            onClick={() => setIsOpen(false)}
            className="md:ml-0 ml-4 px-3 py-2 rounded-md md:text-sm sm:text-base md:font-bold sm:font-medium text-black hover:text-gray hover:bg-gray-50 md:flex sm:block"
          >
            {element.name}
          </Link>
        );
      })}
      {userData && (
        <Link
          to={profileRoute.routeName}
          key={profileRoute.key}
          onClick={() => setIsOpen(false)}
          className="md:ml-0 ml-4 px-3 py-2 rounded-md md:text-sm sm:text-base md:font-bold sm:font-medium text-black hover:text-gray hover:bg-gray-50 md:flex sm:block"
        >
          {profileRoute.name}
        </Link>
      )}
      {!userData ? (
        <Button
          className="md:ml-0 ml-4 px-3 py-2 rounded-md md:text-sm sm:text-base md:font-bold sm:font-medium text-black hover:text-gray hover:bg-gray-50 md:flex sm:block hover:cursor-pointer"
          onClick={onButtonPress}
        >
          Login
        </Button>
      ) : (
        <Button
          className="md:ml-0 ml-4 px-3 py-2 rounded-md md:text-sm sm:text-base md:font-bold sm:font-medium text-black hover:text-gray hover:bg-gray-50 md:flex sm:block hover:cursor-pointer"
          onClick={onLogoutClick}
        >
          Logout
        </Button>
      )}
    </>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const { value, removeLocalStorageItem } = useLocalStorage('user', {
    email: '',
    id: '',
  });
  const {
    localStorageData,
    removeLocalStorageData,
    setLocalStorageData,
    fetchAllItems,
  } = useLocalStorageDataContext();

  useEffect(() => {
    fetchAllItems();
  }, []);
  useEffect(() => {
    if (value && value.email !== '' && value.id !== '') {
      const localData = { email: value.email, id: value.id };
      setLocalStorageData({ ...localData });
    }
  }, [value]);

  const navLinks = [
    {
      name: 'Home',
      routeName: '/',
      key: 1,
    },
    { name: 'NFL', routeName: '/nfl', key: 2 },
    { name: 'NBA', routeName: '/nba', key: 3 },
    { name: 'MLB', routeName: '/mlb', key: 4 },
    { name: 'College Teams', routeName: '/college-teams', key: 5 },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const onButtonPress = () => {
    setAuth(!auth);
    setIsOpen(false);
  };

  const onLogoutClick = async () => {
    removeLocalStorageItem();
    removeLocalStorageData();
    navigate('/');
  };
  const isValidUser = value.email !== '' && value.id !== '';
  return (
    <>
      {auth && <Auth />}
      <nav className="sticky top-0 bg-white shadow-md font-gilroy z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:items-center md:justify-center justify-between h-16">
            <div className="md:hidden flex items-center justify-center">
              <p className="font-extrabold text-red text-2xl">
                Lockers Unlocked
              </p>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block sm:block sm:ml-6">
                <div className="flex items-center text-center">
                  <NavLinksRender
                    navLinks={navLinks}
                    onButtonPress={onButtonPress}
                    setIsOpen={setIsOpen}
                    userData={localStorageData || (isValidUser ? value : null)}
                    onLogoutClick={onLogoutClick}
                  />
                </div>
              </div>
            </div>
            <div className="mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <CrossIcon color="" aria-hidden="true" />
                ) : (
                  <BurgerIcon color="#DC2626" aria-hidden="true" width={25} />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-center">
              <NavLinksRender
                navLinks={navLinks}
                onButtonPress={onButtonPress}
                setIsOpen={setIsOpen}
                userData={localStorageData || (isValidUser ? value : null)}
                onLogoutClick={onLogoutClick}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
