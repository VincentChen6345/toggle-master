import React, { useContext, useState } from "react";

const PlanContext = React.createContext();
const ChangePlanContext = React.createContext();

export function usePlan() {
  return useContext(PlanContext);
}
export function useChangePlan() {
  return useContext(ChangePlanContext);
}

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState("annually");
  const changePlan = () => {
    setPlan(plan === "annually" ? "monthly" : "annually");
    console.log(plan);
  };
  return (
    <PlanContext.Provider value={plan}>
      <ChangePlanContext.Provider value={changePlan}>
        {children}
      </ChangePlanContext.Provider>
    </PlanContext.Provider>
  );
}
//PlanProvider handles creating the state, updating the state via changePlan(), and passes them down into the children
//we create 2 custom hooks usePlan() and useChangePlan() to give us easy access to these different values
