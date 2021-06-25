import "./App.css";
import Maze from "./Maze/Maze";
import Menu from "./Menu/Menu";
import RateCurrency from "./RateCurrency/RateCurrency";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div style={{ color: "red" }}>
        <Menu />
      </div>
      <div style={{ height: "80vh" }}>
        <Switch>
          <Route path="/maze" render={() => <Maze />} />
          <Route path="/ratecurrency" render={() => <RateCurrency />} />
        </Switch>
      </div>
      <hr />
      <div>
        <h3 style={{ color: "red" }}>Task for ITRex 25/06/2021</h3>
      </div>
    </div>
  );
};

export default App;
