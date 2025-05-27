import { Container } from "./styles";
import { Fade } from "react-awesome-reveal";
import kukLogo from "../../assets/kuklogo.png";

export function Education() {
  return (
    <Container id="education">
      <h2 className="section-title">🎓 My Education</h2>

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="education-item">
          <img src={kukLogo} alt="KUK Logo" className="edu-logo" />
          <div className="edu-details">
            <h2>Master of Computer Science(Software)</h2>
            <p>Kurukshetra University (KUK)</p>
          </div>
        </div>
      </Fade>

      <Fade direction="up" duration={1000} delay={200} triggerOnce>
        <div className="education-item">
          <img src={kukLogo} alt="KUK Logo" className="edu-logo" />
          <div className="edu-details">
            <h2>Bachelor of Information Technology</h2>
            <p>Kurukshetra University (KUK)</p>
          </div>
        </div>
      </Fade>
    </Container>
  );
}
