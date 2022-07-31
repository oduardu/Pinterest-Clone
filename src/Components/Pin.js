import React from "react";
import { ArrowRightAlt } from '@mui/icons-material';

function Pin({ pinSize, imgSrc, name, link }) {
    return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>Nome: {name}</h3>
        <div className="search">
          <a href={link}>
            <ArrowRightAlt style={{height: "64px", width: "64px", color: "#FFF"}} />
          </a>
        </div>
      </div>
    </div>
    )
}

export default Pin;