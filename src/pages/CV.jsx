import cvData from "../data/cv.json";
import "./CV.css";
export default function CV() {
  const { education, experience, skills, languages } = cvData;

  return (
    <main className="container">
      <section className="cv-grid">
        {/* Left column */}
        <div className="cv-main">
          <h2>Education</h2>
          <ul className="cv-list">
            {education.map((item) => (
              <li key={item.id}>
                <img src={`${import.meta.env.BASE_URL}${item.logo}`} alt={`${item.institution} logo`} />
                <div>
                  <strong>{item.institution}</strong>
                  <p>{item.program}</p>
                  <p>{item.period}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2>Experience</h2>
          <ul className="cv-list">
            {experience.map((item) => (
              <li key={item.id}>
                <img src={`${import.meta.env.BASE_URL}${item.logo}`} alt={`${item.institution} logo`} />
                <div>
                  <strong>{item.company}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <aside className="cv-side">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((skill) => (
              <li key={skill.name}>
                <img src={`${import.meta.env.BASE_URL}${skill.logo}`} alt={skill.name} />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>

          <h2>Languages</h2>
          <ul className="skills">
            {languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
