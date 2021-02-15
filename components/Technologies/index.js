import React from "react";
import TechBlock from "./TechBlock";

import triangle from "public/icons/triangle.svg";
import block from "public/icons/block.svg";
import getLocale from "../../utils/getLocale";
import translations from "translations";

function Technologies() {
  const locale = getLocale();
  const { js, wordpress, ux } = translations[locale].technologies;
  return (
    <div className="container text-center my-5" id="projects" name="scrollBg">
      <div className="row">
        <div className="col-8 mx-auto">
          <p className="font-bold m-0">OUR TECHNOLOGIES</p>
          <h3 className="tech__description">
            Sed ut perspicatinus ode ominis iste natus error sit voluptatem
            accusantinum diloreqm
          </h3>
        </div>
      </div>
      <div className="row">
        <TechBlock
          title="WORDPRESS"
          description={wordpress}
          img={triangle}
          alt="triangle"
          aos="zoom-in"
        />
        <TechBlock
          title="JAVASCRIPT"
          description={js}
          img={block}
          alt="square"
          aos="zoom-in"
        />
        <TechBlock
          title="UX/UI"
          description={ux}
          img={triangle}
          alt="triangle"
          aos="zoom-in"
        />
      </div>
    </div>
  );
}

export default Technologies;
