import "./ToggleMaster.css";
import { useChangePlan } from "../Context/SubscriptionContext";
const ToggleMaster = () => {
  const changePlan = useChangePlan();

  return (
    <div className="toggle-switch">
      <span className=" text annually"> Annually</span>
      <label className="switch">
        <input type="checkbox" id="checkbox" onClick={changePlan} />
        <span className="slider " />
      </label>
      <span className="text monthly"> Monthly</span>
    </div>
  );
};

export default ToggleMaster;
