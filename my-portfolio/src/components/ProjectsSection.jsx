import React, { useState } from 'react';
import './ProjectsSection.css';
import ProjectModal from './ProjectModal';
import ScrollDownArrow from './ScrollDownArrow';

const projects = [
  {
    id: 1,
    title: '집시크  (ZeepSeek)',
    summary: '사용자 위치 기반 조건 검색 및 시각적 탐색 지원',
    image: '../src/assets/gif/zeepseek-demo.gif',  // ✅ 추가
    desc: '부동산 매물 추천 웹 서비스',
    tech: ['React', 'FastAPI', 'Selenium', 'Open API'],
    period: '2024.01 ~ 2024.02',
    members: 6,
    links: {
      site: null,
      github: 'https://github.com/zeepseek',
    },
    detail: [
      {
        title: '1. 위치 기반 검색 및 시각화된 지역 탐색',
        contents: [
          '카카오맵 API를 활용하여 사용자가 지역 또는 조건으로 매물을 필터링',
          '폴리곤 오버레이로 행정동 경계 표시 및 클릭 이벤트 구현',
          '지도 중심 위치에 따라 자동으로 매물 목록 갱신 처리',
        ],
      },
      {
        title: '2. 데이터 수집 및 전처리',
        contents: [
          'Selenium을 활용한 부동산 매물 크롤링 자동화 구현',
          'Pandas 활용한 매물 정보 데이터 전처리',
        ],
      },
    ],
  },
  {
    id: 2,
    title: '달디단 (Daldidan)',
    summary: 'VisionCamera + YOLOv8 기반 사과 인식 및 당도 추정 앱',
    image: '../src/assets/gif/daldidan-demo.gif',  // ✅ 추가
    desc: '사과 당도 예측 모바일 앱',
    tech: ['React Native', 'YOLOv8', 'TFLite', 'VisionCamera'],
    period: '2024.03 ~ 2024.04',
    members: 6,
    detail: [
      {
        title: '1. VisionCamera 기반 실시간 프레임 추출',
        contents: [
          '카메라로 촬영한 프레임을 실시간으로 가공하고 분석',
          'FrameProcessor로 프레임을 분리하여 객체 인식에 활용'
        ]
      },
      {
        title: '2. YOLOv8을 활용한 사과 탐지',
        contents: [
          'TFLite 변환된 YOLOv8 모델을 통해 사과 객체 검출',
          'Non-Maximum Suppression(NMS) 적용으로 중복 박스 제거'
        ]
      },
      {
        title: '3. 색상 및 형태 기반 당도 예측',
        contents: [
          'HSV, Lab, ΔE 등 이미지에서 색상/질감 정보 추출',
          'XGBoost 회귀 모델로 당도(Brix) 예측'
        ]
      },
      {
        title: '4. 감성적 UX 설계',
        contents: [
          '사과 감지 시 애니메이션 및 타이머 기반 자동 촬영',
          'Top3 사과만 필터링하여 분석 결과를 강조하는 사용자 인터페이스 제공'
        ]
      }
    ]
  },
  {
  id: 3,
  title: '헬스장을 빼앗겼어요, 갑니다 헬스장.',
  summary: '실시간 화상 기반 1:1 운동 게임 서비스 개발',
  image: '../src/assets/gif/health-demo.gif',  // GIF가 있다면 경로 설정
  desc: 'WebRTC와 Socket.io 활용 운동 게임 서비스',
  tech: ['React', 'WebRTC', 'TensorFlow.js', 'Pose Detection', 'Express', 'Socket.IO', 'Skia'],
  period: '2024.02 ~ 2024.03',
  members: 6,
  links: {
    site: null,
    github: 'https://github.com/S12P11E202'
  },
  detail: [
    {
      title: '1. 실시간 화상 연결 및 게임 구조 구현',
      contents: [
        'WebRTC와 Socket.IO를 이용한 1:1 화상 연결 구현',
        '게임 대기방, 매칭, 종료 흐름을 상태 기반으로 제어'
      ]
    },
    {
      title: '2. Pose Detection 기반 동작 인식',
      contents: [
        'TensorFlow.js의 MoveNet을 활용하여 사용자 자세 실시간 추적',
        '점수화 기준(예: 팔 들기 각도) 정의 후 정확도에 따라 자동 점수 부여'
      ]
    },
    {
      title: '3. 프론트엔드 구현 및 UI 애니메이션',
      contents: [
        'React + Skia를 활용해 운동 결과를 시각적으로 표현',
        '사용자 캐릭터, 동기부여 텍스트 등 UX 강화 요소 추가'
      ]
    },
    {
      title: '4. 게임 흐름 제어 및 안정성 확보',
      contents: [
        'Socket 이벤트 기반 게임 타이머 및 결과 판정 처리',
        '비정상 연결 종료, 늦은 입장 등에 대한 예외 처리 로직 적용'
      ]
    }
  ]
},
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section section-content" id="projects-content">
      <h2 className="projects-title">주요 프로젝트</h2>
      <p className="projects-subtitle">
        프로젝트 카드를 클릭하면 자세한 내용을 확인할 수 있습니다.
      </p>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="project-card"
            onClick={() => setSelectedProject(proj)}
          >
            {proj.logo && <div className="project-logo">{proj.logo}</div>}
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tech-badges">
              {(proj.tech || []).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <ScrollDownArrow/>
    </section>
  );
}
