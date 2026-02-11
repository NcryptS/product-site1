import { useEffect, useState } from "react";

function Navbar() {
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
    <nav className="navbar">
      <div className="logo">ShopX</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Offers</li>
        <li>Contact</li>
      </ul>

      <div
        className="nav-scroll-line"
        style={{ left: `${scrollPercent}%` }}
      ></div>
    </nav>
  );
}

export default Navbar;