import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-blue-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="">
          <h1 className="text-7xl text-slate-800 font-bold tracking-wider">
            I'm LMD
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            front-end developer with backend experiences
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/dnlmlszl"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-d%C3%A1niel-a39a956b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
            </a>
            <a
              href="https://twitter.com/dn1el_lszl0"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="laokoon group" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
