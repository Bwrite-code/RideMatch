import React from "react";
import "./BikeAnimation.css";

const BikeAnimation: React.FC = () => {
  return (
    <div className="bike-wrapper">
      <img src="/bike.png" alt="Bike" className="bike" />
    </div>
  );
};

export default BikeAnimation;
