import React from 'react';
import './IntroSection.css';
import ScrollDownArrow from './ScrollDownArrow';

const greeting = "안녕하세요,";
const roleText = "프론트엔드 개발자 하건수입니다.";

function renderTypingText(text, baseClass) {
  return (
    <span className={`${baseClass}-wrapper`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`${baseClass}-char`}
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export default function IntroSection() {
  return (
    <section className="intro-section section-content" id="intro-content">
      <div className="intro-logo sparkle">💡</div>

      <div className="intro-text">
        <h1 className="intro-greeting">
          {renderTypingText(greeting, 'intro-greeting')}
        </h1>
        <h2 className="intro-role">
          {renderTypingText(roleText, 'intro-role')}
        </h2>
      </div>

      <p className="intro-description">
        React를 중심으로 웹 프론트엔드를 개발합니다.<br />
        함께 제품을 만들고 성장시킬 수 있는 곳을 찾고 있습니다.
      </p>
      <ScrollDownArrow/>
    </section>
  );
}
