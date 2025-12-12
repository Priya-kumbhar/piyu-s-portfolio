import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import React from "react";
const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;