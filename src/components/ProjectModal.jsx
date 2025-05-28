import React from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{project.title}</h2>

        {project.image && (
        <div className="project-gif">
            <img src={project.image} alt={`${project.title} preview`} />
        </div>
        )}

        {project.summary && <p className="summary">{project.summary}</p>}
        {project.description && <p className="description">{project.description}</p>}
        {project.desc && !project.description && <p className="description">{project.desc}</p>}

        <div className="meta">
          {/* 기술 스택 */}
          {project.tech && (
            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}

          {/* 참여 인원 / 기간 */}
          {project.members && <p>👥 참여인원: {project.members}명</p>}
          {project.period && <p>🗓️ 기간: {project.period}</p>}

          {/* 링크 */}
          {project.links?.github && (
            <p>
              🔗 GitHub: <a href={project.links.github} target="_blank" rel="noreferrer">
                {project.links.github}
              </a>
            </p>
          )}
          {project.links?.site && (
            <p>
              🔗 사이트: <a href={project.links.site} target="_blank" rel="noreferrer">
                {project.links.site}
              </a>
            </p>
          )}
        </div>

        {/* 상세 내용 */}
        {Array.isArray(project.detail) && project.detail.map((section, idx) => (
          <div key={idx} className="detail-section">
            <h4>{section.title}</h4>
            <ul>
              {section.contents.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
