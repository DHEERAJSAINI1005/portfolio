import { Container } from "./styles";
import { Fade } from "react-awesome-reveal";
import Illustration from "../../assets/illustration.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import { useEffect, useState } from "react";

const textArray = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Developer'];

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <Fade direction="up" triggerOnce>
          <h1>Hi There,</h1>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <h1>I'm Dheeraj Kumar</h1>
        </Fade>
        <Fade direction="up" delay={400} triggerOnce>
          <h3>{textArray[currentTextIndex]}</h3>
        </Fade>
        <Fade direction="up" delay={600} triggerOnce>
          <p className="small-resume">
            3+ Years of Experience as a Full Stack Developer
          </p>
        </Fade>
        <Fade direction="up" delay={800} triggerOnce>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </Fade>
        <Fade direction="up" delay={1000} triggerOnce>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/dheeraj-kumar-74571012b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/dheerajsaini1005/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918607095982&text=Hello+Dheeraj+I+found+your+contact+through+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/@dheerajkumar1005"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </Fade>
      </div>

      <div className="hero-image">
        <Fade direction="right" delay={1000} triggerOnce>
          <img src={Illustration} alt="Illustration" />
        </Fade>
      </div>
    </Container>
  );
}
