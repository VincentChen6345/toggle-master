import "./App.css";
import Card from "./Components/Card";
import ToggleMaster from "./Components/ToggleMaster";

function App() {
  return (
    <div className="App" href="https://fonts.google.com/specimen/Montserrat">
      <div className="container">
        <h1 className="h1-title">Our Pricing</h1>
        <ToggleMaster />
        <Card
          class="card-1"
          type="Professional"
          price="24.99"
          storage="1TB"
          users="5"
          upload="10"
          btnClass="card-btn center"
        />
        <Card
          class="card-2"
          type="Basic"
          price="19.99"
          storage="500GB"
          users="2"
          upload="3"
          btnClass="card-btn"
        />
        <Card
          class="card-3"
          type="Master"
          price="39.99"
          storage="1TB"
          users="5"
          upload="10"
          btnClass="card-btn"
        />
      </div>
    </div>
  );
}

export default App;
