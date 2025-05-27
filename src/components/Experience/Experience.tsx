import { Container } from "./styles";

export function Experience() {
  const experiences = [
    {
      company: "Wepro Solutions",
      title: "Full Stack Developer",
      duration: "Mar 2022 - May 2025",
      side: "left",
    },
    {
      company: "OOPS Technologies",
      title: "Web Development | Training",
      duration: "Sep 2021 - Feb 2022",
      side: "right",
    },
  ];

  return (
    <Container id="experience">
      <h2 className="section-title">🧳 Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`timeline-item ${exp.side}`}>
            <div className="content">
              <p className="company">{exp.company}</p>
              <h3>{exp.title}</h3>
              <p className="duration">{exp.duration}</p>
            </div>
          </div>
        ))}
        <div className="view-all-btn">View All ➜</div>
      </div>
    </Container>
  );
}
