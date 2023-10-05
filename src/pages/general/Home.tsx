import LayoutGeneral from '../layouts/LayoutGeneral';
import bg from '../../assets/imgs/img-1.jpg';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <LayoutGeneral>
      <div className="home__page h-screen bg-white dark:bg-neutral-800 text-black dark:text-white">
        <div className="bg__container absolute overflow-hidden h-full before:absolute before:bg-black/60 before:top-0 before:left-0 before:bottom-0 before:right-0">
          <img
            src={bg}
            alt="background anime U-ree"
            className="bg__content h-full object-cover "
          />
        </div>

        <main className="relative text-center w-full h-full flex justify-center items-center flex-col">
          <h3 className="subline  uppercase font-bold text-white text-xl">
            Belajar
          </h3>
          <h1 className="headline uppercase font-extrabold text-white text-4xl">
            Pemograman Java
          </h1>
          <h3 className="subline text-slate-100">Bersama RPL-B</h3>

          <Link
            className="bg-sky-500 text-white px-4 py-1 hover:bg-sky-700 transition duration-300 rounded-full mt-5"
            to={'/learning'}>
            Learn Now
          </Link>
        </main>
      </div>
    </LayoutGeneral>
  );
}

export default Home;
