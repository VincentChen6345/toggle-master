import "./ToggleMaster.css";

const ToggleMaster = () => {
  return (
    <div className="toggle-switch">
      <span className=" text annually"> Annually</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider " />
      </label>
      <span className="text monthly"> Monthly</span>
    </div>
  );
};

export default ToggleMaster;
