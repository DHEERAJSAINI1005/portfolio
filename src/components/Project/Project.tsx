import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import { Flip } from "react-awesome-reveal";

const folderIcon = (
  <svg
    width="50"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#23ce6b"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Folder</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const projects = [
  {
    title: "WeAreAppointments",
    description: [
      "Built over 40 dynamic UI components for a user-friendly interface using React.js, leading to a 20% increase in user engagement.",
      "Integrated third-party services (e.g., calendar sync, email notifications) to enhance functionality.",
      "Utilized Redux for efficient state management, ensuring smooth user interactions."
    ],
    tech: ["ReactJs", "Laravel"],
    link: "https://www.weareappointments.com"
  },
  {
    title: "Gobbler.ai",
    description: [
      "Engineered AI-powered features that generate high-quality videos and images from user-provided text using OpenAI and stability-based APIs.",
      "Integrated social media automation allowing users to directly publish generated content on Facebook and YouTube.",
      "Built intuitive UI components in React.js for video preview, customization, and publishing workflows.",
      "Managed API orchestration and secure media handling on the backend using Laravel.",
    ],
    tech: ["ReactJs", "Laravel", "OpenAI", "YouTube API", "Facebook Graph API"],
    link: "https://www.gobbler.ai"
  },
  {
    title: "Asegumed",
    description: [
      "Facilitated submission of injury cases to ProntoCaseCash, streamlining funding access for accident victims."
    ],
    tech: ["ReactJs", "Laravel"],
    link: "https://www.asegumed.com"
  },
  {
    title: "DayOneDev",
    description: [
      "Developed a client-focused website showcasing products, services, and business solutions."
    ],
    tech: ["ReactJs", "Laravel"],
    link: "https://www.dayonedevelopment.com"
  },
  {
    title: "LegalLeadspro",
    date: "Dec 2024",
    role: "Full Stack Developer (React.js & Laravel)",
    description: [
      "Developed a platform to assist legal cases related to physical therapy injuries."
    ],
    tech: ["ReactJs", "Laravel"],
    link: "https://www.legalleadspro.com"
  },
  {
    title: "AskProAdviser",
    date: "April 2023",
    description: [
      "Developed key React components to facilitate seamless appointment scheduling.",
      "Implemented responsive design, optimizing performance across multiple devices."
    ],
    tech: ["ReactJs"]
  },
  {
    title: "Lead-Calendar",
    date: "April 2023",
    description: [
      "Created React components for intuitive appointment scheduling.",
      "Employed responsive design strategies, ensuring performance across various devices."
    ],
    tech: ["ReactJs"]
  },
  {
    title: "ProntoCaseCash",
    date: "May 2022 – March 2023",
    description: [
      "Led the React development for the website, improving usability by 30%.",
      "Collaborated with design teams to enhance the user journey, increasing engagement by 20%."
    ],
    tech: ["ReactJs", "Laravel"],
    link: "https://www.prontocasecash.com"
  },
  {
    title: "ClearSource",
    date: "April 2022 – May 2022",
    description: [
      "Implemented client-side routing and responsive design, improving user engagement.",
      "Integrated with backend APIs to dynamically fetch and display job listings."
    ],
    tech: ["ReactJs", "Laravel"],
    link: "https://www.clearsource.com"
  }
];

export function Project() {
  return (
    <Container id="project">
      <h2>💻 My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Flip key={index} direction="horizontal" triggerOnce>
            <div className="project">
              <header>
                {folderIcon}
                {project.link && (
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  </div>
                )}
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>
                  {project.date && <strong>{project.date}</strong>}
                  <br />
                  {project.description.map((line, i) => (
                    <span key={i}>
                      ● {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </Flip>
        ))}
      </div>
    </Container>
  );
}
