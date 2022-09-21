import "./App.css";
import Card from "./Components/Card";
import ToggleMaster from "./Components/ToggleMaster";
import { ReactComponent as BottomSVG } from "./images/bg-bottom.svg";
import { ReactComponent as TopSVG } from "./images/bg-top.svg";
import { usePlan } from "./Context/SubscriptionContext";
function App() {
  const currentPlan = usePlan();
  console.log("currentPlan is ", currentPlan);

  return (
    <div className="App" href="https://fonts.google.com/specimen/Montserrat">
      <div className="container">
        <h1 className="h1-title">Our Pricing</h1>
        <ToggleMaster />
        <Card
          class="card card-1"
          type="Professional"
          price={currentPlan === "annually" ? "249.99" : "24.99"}
          storage="1TB"
          users="5"
          upload="10"
          btnClass="card-btn center"
        />
        <Card
          class="card card-2"
          type="Basic"
          price={currentPlan === "annually" ? "199.99" : "19.99"}
          storage="500GB"
          users="2"
          upload="3"
          btnClass="card-btn"
        />
        <Card
          class="card card-3"
          type="Master"
          price={currentPlan === "annually" ? "399.99" : "39.99"}
          storage="1TB"
          users="5"
          upload="10"
          btnClass="card-btn"
        />
      </div>
      <BottomSVG className="bottom-svg" />
      <TopSVG className="top-svg" />
    </div>
  );
}

export default App;
