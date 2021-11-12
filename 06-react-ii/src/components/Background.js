import React from "react";

import "../style/background.css";
import background from "../images/bg.jpeg";

export default function Background() {
  return <img className="background" src={background} alt="background img" />;
}
