import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import kukLogo from "../../assets/kuklogo.png";

export function Education() {
  return (
    <Container id="education">
      <h2 className="section-title">🎓 My Education</h2>

      <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce>
        <div className="education-item">
          <img src={kukLogo} alt="KUK Logo" className="edu-logo" />
          <div className="edu-details">
            <h2>Master of Computer Science(Software)</h2>
            <p>Kurukshetra University (KUK)</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} animateOnce>
        <div className="education-item">
          <img src={kukLogo} alt="KUK Logo" className="edu-logo" />
          <div className="edu-details">
            <h2>Bachelor of Information Technology</h2>
            <p>Kurukshetra University (KUK)</p>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}