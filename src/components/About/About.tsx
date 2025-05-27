import { Container } from "./styles";
import DheerajKumar from "../../assets/dheerajkumar.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <h2 className="section-title">👤 About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft" delay={100}>
            <p>
              A passionate software developer with 3 years of professional experience and a strong academic foundation in computer science. I hold a Master’s degree in Computer Science(Software), which has equipped me with in-depth knowledge of programming principles, software engineering, and modern development practices. Over the years, I’ve worked on a variety of projects that have honed my skills in coding, problem-solving, and effective team collaboration. Currently, I am working as a software developer, continuously learning and adapting to new technologies in this fast-paced industry. I’m enthusiastic about leveraging technology to build impactful solutions and always seek opportunities to innovate and contribute meaningfully to the tech community.
            </p>
          </ScrollAnimation>
        </div>

        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={210}>
            <img src={DheerajKumar} alt="Dheeraj Kumar" />
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
}
