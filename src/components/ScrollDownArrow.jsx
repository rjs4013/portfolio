import React from 'react';
import './ScrollDownArrow.css';

export default function ScrollDownArrow() {
  const scrollDown = () => {
    if (window.fullpage_api?.moveSectionDown) {
      window.fullpage_api.moveSectionDown();
    }
  };

  return (
    <div className="scroll-down-arrow" onClick={scrollDown}>
      ⏬
    </div>
  );
}
