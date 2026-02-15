import "../styles/Hero.css";
import { FaReact, FaNodeJs, FaLinux, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiC } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Hi, I’m <span>Mahibalan</span>
        </h1>
        <h2>ECE Student | MERN Stack Developer</h2>

        <p>
          I build modern web applications and smart systems that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <div className="hero-btn">
            <a href="#projects"><button className="primary" >View Projects</button></a>
            <a href="https://leetcode.com/u/mahib_alan/" target="_blank"><button className="ternary">Leetcode Profile</button></a>
            <a href="#contact"><button className="secondary" >Contact Me</button></a>
          </div>

          <a
            href="./public/Mahi_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>



        </div>
      </div>

    </section>
  );
}

export default Hero;
