import "./Portfolio.css";
import { useState, useEffect } from "react";
import personalProjects from "../data/personalProjects";
export default function Portfolio() {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //THIS IS SO BAD
  useEffect(() => {
    fetch(`https://api.github.com/users/Erik-Backdahl/repos?sort=updated&per_page=30`)
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch repositories.");
        return res.json();
      })
      .then((data) => {
        setGithubRepos(data.filter((repo) => !repo.fork));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <section>
        <h1>Personal Projects</h1>
        <ul className="portfolio-list">
          {personalProjects.map((project) => (
            <li key={project.id} className="portfolio-item">
              <h2 className="title">
                {project.name}
                <br />
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </h2>
              <div className="content">
                <p>{project.description}</p>
                <p>
                  <em>Tech stack:</em>
                </p>
                <div className="info-box">
                  {project.stack.map((tech) => (
                    <img
                      key={tech.name}
                      src={`${import.meta.env.BASE_URL}${tech.logo}`}
                      alt={tech.name}
                      title={tech.name}
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="github-section">
        <h2>GitHub Repositories</h2>

        {loading && (
          <p className="loading-msg">Fetching repositories from GitHub…</p>
        )}

        {error && (
          <p className="error-msg">Could not load GitHub projects: {error}</p>
        )}

        {!loading && !error && (
          <ul className="github-list">
            {(
              githubRepos.map((repo) => (
                <li key={repo.id} className="github-item">
                  <h3>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
                      {repo.name}
                    </a>
                  </h3>
                  <p>{repo.description || "No description provided."}</p>
                  {repo.language && (
                    <span className="repo-lang">{repo.language}</span>
                  )}
                </li>
              ))
            )}
          </ul>
        )}
      </section>
    </main>
  );
}
