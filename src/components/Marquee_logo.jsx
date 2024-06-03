import React from "react";
import Logo_Apple from "../assets/Logo_Apple.inc.gif"
import Marquee from "react-fast-marquee";

const Marquee_logo = () => (
  <Marquee pauseOnHover speed={100}>
    <img src={Logo_Apple} alt="" width={50}  />
  </Marquee>
);

export default Marquee_logo;