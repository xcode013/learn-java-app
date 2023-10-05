import {FaMoon, FaSun} from 'react-icons/fa';
import useToggle from '../../utils/hooks/useToggle';
function DarkmodeBtn() {
  const [theme, setTheme] = useToggle({initialValue: false});
  const setDark = () => {
    const root = window.document.getElementById('root');
    root?.classList.toggle('dark');
    setTheme();
  };
  return (
    <button
      onClick={() => setDark()}
      className="aspect-square bg-sky-800 rounded-full text-yellow-300 dark:bg-slate-900 dark:text-neutral-200 w-10 text-xl flex justify-center items-center">
      {theme ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default DarkmodeBtn;
