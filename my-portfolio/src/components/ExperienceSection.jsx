import React from 'react';
import './ExperienceSection.css';
import '../SectionAnimation.css'

export default function ExperienceSection() {
  return (
    <section className="experience-section section-content" id='experience-content'>
      <h2 className="experience-title">경험</h2>
      <div className="experience-item">
        <h3>SSAFY 9기</h3>
        <p>삼성청년SW아카데미에서 팀 프로젝트 및 데이터 분석 학습</p>
      </div>
      <div className="experience-item">
        <h3>디지털배움터 서포터즈</h3>
        <p>디지털 소외계층 대상 교육 지원 및 헬프데스크 운영</p>
      </div>
    </section>
  );
}
