import React, { useEffect, useRef } from "react";
import Head from "next/head";
import ContactForm from "@components/ContactForm";
import MainHeader from "../components/MainHeader";
import AboutUs from "../components/AboutUs";
import Technology from "../components/Technology";
import styles from "@styles/spotlight.module.scss";
import Carousel from "../components/Carousel";
import Offers from "@components/Offers";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const spotlight = containerRef.current;
    let spotlightSize = "transparent 160px, rgba(255, 255, 255,1) 200px)";
    window.addEventListener("mousemove", (e) => {
      spotlight.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    });
  });

  return (
    <>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kazdy projekt budowany indywidualnie według potrzeb klienta. Next Js, Wordpress, CMS"
        ></meta>
      </Head>
      <div className="nav__desktop" name="scrollBg">
        <div className={styles.spotlight__wrap}>
          <div ref={containerRef} className="spotlight__point">
            <MainHeader />
            <AboutUs />
          </div>
        </div>
        <Technology />
        <Carousel />
        <Offers />
        <ContactForm />
      </div>
    </>
  );
}
