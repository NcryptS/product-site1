import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container">
      <div
        className="scroll-progress"
        style={{ height: `${scrollPercent}%` }}
      ></div>
    </div>
  );
}

export default ScrollProgress;