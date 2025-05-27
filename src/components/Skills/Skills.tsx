import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import muiIcon from "../../assets/mui.png";
import tailwindIcon from "../../assets/tailwind.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import nodeIcon from "../../assets/node.png";
import laravelIcon from "../../assets/laravel.png";
import expressIcon from "../../assets/express.png";
import apiIcon from "../../assets/api.jpg";
import mongodbIcon from "../../assets/mongodb.png";
import mysqlIcon from "../../assets/mysql.png";
import gitIcon from "../../assets/git.png";

const skills = [
  { name: "React Js", icon: reactIcon },
  { name: "Material-UI", icon: muiIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Laravel", icon: laravelIcon },
  { name: "Node.Js", icon: nodeIcon },
  { name: "Express.Js", icon: expressIcon },
  { name: "REST APIs", icon: apiIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Git", icon: gitIcon },
];

export function Skills() {
  return (
    <Container id="skills">
      <h2 className="section-title">💻 Skills <span>& Abilities</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
