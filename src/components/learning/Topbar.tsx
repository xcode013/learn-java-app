import {HiMenu, HiX} from 'react-icons/hi';
import useToggle from '../../utils/hooks/useToggle';
import SectionListMateri from './SectionListMateri';

function Topbar() {
  const [topbar, setTopbar] = useToggle({initialValue: false});
  return (
    <nav className="fixed text-white h-9 flex justify-center items-center w-full bg-slate-900 z-30 top-14">
      <button
        className="text-xl aspect-square h-full flex justify-center items-center"
        onClick={() => setTopbar()}>
        {topbar ? <HiX /> : <HiMenu />}
      </button>
      <main
        className={`links absolute w-full ${topbar ? 'h-96' : 'h-0'}
         bg-slate-700 transition-all duration-300 top-full overflow-y-scroll`}>
        <SectionListMateri />
      </main>
    </nav>
  );
}

export default Topbar;
