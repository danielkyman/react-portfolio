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
          <div key={project.sys.id}>
            <a
              href={project.fields.source}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.fields.title}
            </a>
            <p>{project.fields.description}</p>
            <a
              href={project.fields.source}
              target="_blank"
              rel="noreferrer noopener"
            >
              Repository
            </a>
            <a
              href={project.fields.path}
              target="_blank"
              rel="noreferrer noopener"
            >
              Deployment
            </a>
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
