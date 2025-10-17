import React from "react";
import CountUp from "react-countup";

const Addons = () => {
  return (
    <div>
      <h1>Addons<br/>
      <CountUp start={0} end={100} duration={2.75} /></h1>
    </div>
  );
};

export default Addons;
