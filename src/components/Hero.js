import '../App.css';
import hero from '../images/hero.png';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    Aos.init({});
  });

  return (
    <section
      id="home"
      className="mt-[70px] px-8 md:px-16 md:text-left py-6 text-center grid md:grid-cols-2 gap-5 items-center justify-center"
    >
      <div className="flex flex-col gap-5 mb-5 md:mb-0">
        <h1 className="text-2xl font-extrabold md:text-3xl">
          <div data-aos="fade-left">
            Hi, I'm{' '}
            <span className=" text-red-700">
              Oluwaodojutimi Simi.
            </span>{' '}
          </div>
          <div data-aos="fade-right">
            I am a{' '}
            <span className="  text-red-700">
              Frontend Web Developer
            </span>{' '}
            based in Nigeria.
          </div>
        </h1>
        <p className="text-lg">
          Welcome to my portfolio website, I strive to deliver
          exceptional solutions that meet my clients' unique needs.
          Explore my portfolio to see examples of my work and the
          outstanding results achieved. I look forward to
          collaborating with you and turning your ideas into reality.
          Let's create something amazing together!
        </p>
        <button className="md:self-start self-center bg-blue-700 w-40 py-2 text-white rounded">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      <img
        src={hero}
        alt="hero-component"
        className="row-start-1 md:row-auto rounded-2xl"
      />
    </section>
  );
}

export default Hero;
