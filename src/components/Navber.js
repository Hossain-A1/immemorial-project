import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/Gsap";
const Navber = () => {
  const list1 = useRef(null);
  const list2 = useRef(null);
  const list3 = useRef(null);
  const fevRef = useRef(null);
  const logo = useRef(null);

  const listAdd = [list1, list2, list3];
  const fevArr = [fevRef];
  const logoArr = [logo];

  useGsapDownStagger(listAdd, 0.2);
  useGsapDownStagger(logoArr, 2.5);
  useGsapDownStagger(fevArr, 3);
  return (
    <nav className="navber wrapper">
      <ul className="links">
        <li ref={list1}>
          <Link to="/featured">Featured</Link>
        </li>
        <li ref={list2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={list3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logo}>
        <Link to="/">
          <h2>Immemorial</h2>
        </Link>
      </div>
      <div className="blog-link" ref={fevRef}>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navber;
