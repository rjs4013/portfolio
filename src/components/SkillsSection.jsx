import React, { useState, useEffect } from "react";
import "./SkillsSection.css";
import ScrollDownArrow from "./ScrollDownArrow";

const categories = [
  { key: "all", label: "전체" },
  { key: "dev", label: "개발" },
  { key: "tool", label: "도구" },
  { key: "design", label: "디자인" },
];

const techStacks = [
  { name: "JavaScript", category: "dev", icon: "JavaScript.png" },
  { name: "TypeScript", category: "dev", icon: "TypeScript.png" },
  { name: "React", category: "dev", icon: "React.png" },
  { name: "Vue.js", category: "dev", icon: "Vue.js.png" },
  { name: "CSS3", category: "dev", icon: "CSS3.png" },
  { name: "Python", category: "dev", icon: "Python.png" },
  { name: "Django", category: "dev", icon: "Django.png" },
  { name: "Django REST", category: "dev", icon: "django-rest.png" },
  { name: "Redux", category: "tool", icon: "Redux.png" },
  { name: "GitHub", category: "tool", icon: "GitHub.png" },
  { name: "Jira", category: "tool", icon: "Jira.png" },
  { name: "Adobe Photoshop", category: "design", icon: "adobe-photoshop.png" },
  { name: "Figma", category: "design", icon: "Figma.png" },
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animateClass, setAnimateClass] = useState("fade");

  const filteredStacks =
    selectedCategory === "all"
      ? techStacks
      : techStacks.filter((stack) => stack.category === selectedCategory);

  useEffect(() => {
    if (selectedCategory === "all") {
      setAnimateClass("fade");
    } else {
      setAnimateClass("slide");
    }
  }, [selectedCategory]);

  return (
    <section className="skills-section section-content" id="skills-content">
      <h2 className="skills-heading">기술 스택 및 도구</h2>
      <p className="skills-subtitle">아래의 기술을 사용할 수 있습니다.</p>

      <div className="skills-tabs">
        {categories.map((cat) => (
          <span
            key={cat.key}
            className={`tab ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </span>
        ))}
      </div>

      <div className={`skills-grid ${animateClass}`}>
        {filteredStacks.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img
              src={`${import.meta.env.BASE_URL}assets/icons/${tech.icon}`}
              alt={tech.name}
            />
            <p className="skills-subtitle2">{tech.name}</p>
          </div>
        ))}
      </div>
      <ScrollDownArrow />
    </section>
  );
}
