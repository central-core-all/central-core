import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import throttle from "lodash/throttle";
import gsap from "gsap";
import logo from "../public/logo_white.svg";

function Layout({ children }) {
  const [scrollHeight, setScrolLHeight] = useState(0);
  const [sectionOffset, setSectionOffset] = useState([]);

  useEffect(() => {
    function getSectionsOffset() {
      const sections = document.getElementsByName("scrollBg");
      const offsetArr = [];
      sections.forEach(section => {
        const offset = section.offsetTop;
        offsetArr.push(offset);
      });
      setSectionOffset(offsetArr);
    }

    function handleScroll() {
      setScrolLHeight(window.pageYOffset);
    }

    getSectionsOffset();
    window.addEventListener("resize", throttle(getSectionsOffset, 100));
    window.addEventListener("scroll", throttle(handleScroll, 100));

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(".intro__logo", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.to(".intro__logo", { opacity: 0, duration: 0.7 });
    tl.to(".text", { y: "0%", duration: 0.7, stagger: 0.2 });
    tl.to(".intro__slider", { y: "-100%", duration: 1, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    return () => {
      window.removeEventListener("resize", getSectionsOffset);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = determineBgColor(scrollHeight, sectionOffset);

  return (
    <div className={`content ${bgColor}`}>
      <div className="intro">
        <div className="intro__text">
          <div className="intro__logo">
            <img className="text" src={logo} alt="Logo" />
          </div>
          <h1 className="intro__hide">
            <span className="text">We build</span>
          </h1>
          <h1 className="intro__hide">
            <span className="text">digital world</span>
          </h1>
        </div>
      </div>
      <div className="intro__slider" />
      <Navigation bgColor={bgColor} />
      {React.cloneElement(children, { bgColor })}
      <Footer bgColor={bgColor} />
    </div>
  );
}

export default Layout;

function determineBgColor(height, sections) {
  if (between(height, -500, sections[0])) {
    return "white";
  } else if (between(height, sections[0], sections[1])) {
    return "black";
  } else if (between(height, sections[1], sections[2])) {
    return "white";
  } else {
    return "black";
  }
}

function between(x, min, max) {
  return x >= min && x <= max;
}
