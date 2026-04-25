import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SubPlanCard from "../Components/SubPlanCard";
import { toast } from "react-toastify";
const SubscriptionPage = () => {
  // state to hold / store selected plan:
  const [selectedPlan, setSelectedPlan] = useState(null);

  // handler for Selected Plan:

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan.name);
    toast.success(`Subscribed to ${plan.name} Plan 🎉`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // plans Data:

  const plans = [
    {
      name: "Basic",
      price: "$4.99",
      quality: "Good",
      screens: 1,
      resolution: "480p",
      ads: "with Ads",
      duration: "Monthly",
    },
    {
      name: "Standard",
      price: "$9.99",
      quality: "Better",
      screens: 2,
      resolution: "1080p",
      popular: true,
      ads: "Less Ads",
      duration: "Monthly",
    },
    {
      name: "Premium",
      price: "$14.99",
      quality: "Best",
      screens: 4,
      resolution: "4K + HDR",
      ads: "no Ads",
      duration: "Monthly",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="main-subscription-wrapper">
        <div className="sub-title">
          <h1>Choose Your Plan</h1>
          <p>No contracts. Cancel anytime. Upgrade or downgrade easily.</p>
        </div>
        {/* subscriptions - plans - cards - wrapper */}
        <div className="container">
          <div className="sub-plans-card-wrapper">
            {plans.map((plan, idx) => (
              <SubPlanCard
                plan={plan}
                id={idx}
                isSelected={selectedPlan === plan.name}
                subscribeHandler={handleSubscribe}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
