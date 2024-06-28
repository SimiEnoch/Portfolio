import '../App.css';
import about from '../images/about.png';
import about1 from '../images/about-removebg-preview.png';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <section
      id="about"
      className="grid md:grid-cols-2 items-center justify-center p-8 md:px-16 gap-5 "
    >
      <img
        src={about1}
        alt="about"
        className="row-start-2 md:row-auto rounded-[50%]"
        data-aos="fade-up"
      />
      <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-start">
        <h2
          className=" text-2xl font-bold text-red-700"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <p className="text-lg" data-aos="fade-up">
          Welcome to my world of web development! I'm Simi, a
          self-taught web developer dedicated to mastering the art of
          creating exceptional websites. With a strong passion for
          learning and staying-up-to-date with the latest
          technologies, I deliver high-quality, customized web
          solutions. I pride myself on clean, efficient code and
          effective communication, ensuring a seamless collaboration
          <br />
          Explore some of my projects and Let's build the web
          together!
        </p>
        <ul
          data-aos="fade-up"
          className="flex md:block items-center justify-around gap-9 text-lg marker:text-red-600 list-disc p-0 md:ml-4"
        >
          <li>Learn</li>
          <li>Design</li>
          <li>Code</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
