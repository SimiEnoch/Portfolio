import '../App.css';
import about from '../images/about.png';
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
        src={about}
        alt="about"
        className="row-start-2 md:row-auto rounded-[50%]"
        data-aos="fade-down"
      />
      <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-start">
        <h2
          className=" text-2xl font-bold text-red-700"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <p className="text-lg" data-aos="fade-up">
          Simi is a self-taught web developer with a strong passion
          for learning and matering the art of web development. I have
          acquired comprehensive skills and developing creative
          websites. With a focus on staying-up-to-date with the latest
          technologies. I am highly dedicated to delivering high
          quality, web solutions that meet clients unique
          requirements.
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
