import React from "react";

const SubPlanCard = ({ plan, idx, isSelected, subscribeHandler }) => {
  return (
    <div className={`sub-plan-card ${isSelected ? "active" : ""}`} key={idx}>
      <h1>{plan.name}</h1>
      <p>{plan.ads}</p>
      <div className="price-date-info">
        <h2>{plan.price}</h2>
        <h4>{plan.duration}</h4>
      </div>
      <div className="continue-plan-btn">
        <button onClick={() => subscribeHandler(plan)}>
          {/* Continue with {plan.name} */}
          {isSelected ? "Selected" : "Subscribe"}
        </button>
      </div>
      <ol>
        <li>Quality : {plan.quality}</li>
        <li>Screens : {plan.screens}</li>
        <li>Resolution : {plan.resolution}</li>
      </ol>
    </div>
  );
};

export default SubPlanCard;
