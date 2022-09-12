import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App" href="https://fonts.google.com/specimen/Montserrat">
      <div className="container">
        <h1 className="h1-title">Our Pricing</h1>
        <div className="toggle-switch">
          Annually
          <label>
            <input type="checkbox" checked />
            <span></span>
          </label>
          Monthly
        </div>
        <Card
          class="card-1"
          type="Professional"
          price="24.99"
          storage="1TB"
          users="5"
          upload="10"
        />
        <Card
          class="card-2"
          type="Basic"
          price="19.99"
          storage="500GB"
          users="2"
          upload="3"
        />
        <Card
          class="card-3"
          type="Master"
          price="39.99"
          storage="1TB"
          users="5"
          upload="10"
        />
      </div>
    </div>
  );
}

export default App;
