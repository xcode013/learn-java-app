import {Fragment} from 'react';
import logoSMKPurwosari from '../../assets/imgs/Logo-SMK-Negeri-Purwosari.png';
import {Link} from 'react-router-dom';
import DarkmodeBtn from './DarkmodeBtn';
import {HiMenu, HiX} from 'react-icons/hi';
import useToggle from '../../utils/hooks/useToggle';

function TopbarNavigation() {
  const [sidebar, setSidebar] = useToggle({initialValue: false});
  return (
    <nav className="flex justify-between text-white items-center px-8 z-40 fixed w-full h-14 bg-sky-600">
      <aside className="left ">
        <DarkmodeBtn />
      </aside>
      <main className="center h-10 aspect-square cursor-pointer">
        <Link to={'www.youtube.com'}>
          <img src={logoSMKPurwosari} alt="Logo SMK Negeri Purwosari" />
        </Link>
      </main>
      <aside className="right flex justify-center z-50 items-center aspect-square w-10 rounded-full bg-sky-800 text-xl">
        <button onClick={() => setSidebar()}>
          <HiMenu />
        </button>

        <aside
          className={`fixed top-0 z-50 bottom-0 w-full flex flex-col items-end transition-all bg-sky-600 ${
            sidebar ? 'right-0' : '-right-full'
          }`}>
          <button
            className="flex justify-center items-center aspect-square w-10 text-xl m-3 mx-8"
            onClick={() => setSidebar()}>
            <HiX />
          </button>
          <main className="links w-full">
            {linkdatas.map((data, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    className="capitalize w-full px-6 py-2 flex justify-end items-center hover:bg-sky-400"
                    to={data.path}>
                    {data.content}
                  </Link>
                </Fragment>
              );
            })}
          </main>
        </aside>
      </aside>
    </nav>
  );
}

export default TopbarNavigation;

const linkdatas = [
  {content: 'home', path: '/'},
  {content: 'learning', path: '/learning'},
  {content: 'about us', path: '/aboutus'},
];
