import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { getProject } from "../../redux/actions/projects";

const ProjectsPreview = ({ getProject, projects }) => {
  useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <div className="projects-preview">
      <h1>Recent Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project.sys.id} className="inner-home">
            <h3>
              <a
                href={project.fields.source}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.fields.title}
              </a>
            </h3>
            <p>- {project.fields.description}</p>
            <div className="repo-depo-links">
              <h3>
                <a
                  href={project.fields.source}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Repository
                </a>
              </h3>
              <h3>
                <a
                  href={project.fields.path}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Deployment
                </a>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  };
};

export default connect(mapStateToProps, { getProject })(ProjectsPreview);
