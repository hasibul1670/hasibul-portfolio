import React, { useEffect, useRef } from "react";
import "./Typing.css";

function Typing() {
  const textRef = useRef(null);

  useEffect(() => {
    const roles = [
      "Web Developer.",
      "Problem Solver.",
      "Programmer.",
      "Engineer.",
    ];
    const element = textRef.current;

    if (!element) {
      return undefined;
    }

    let loopNum = 0;
    let currentText = "";
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const fullText = roles[loopNum % roles.length];

      currentText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      element.innerHTML = `<span class="wrap">${currentText}</span>`;

      let delay = 300 - Math.random() * 100;

      if (isDeleting) {
        delay /= 2;
      }

      if (!isDeleting && currentText === fullText) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        loopNum += 1;
        delay = 500;
      }

      timeoutId = window.setTimeout(tick, delay);
    };

    tick();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span ref={textRef} className="txt-rotate"></span>
  );
}

export default Typing;
