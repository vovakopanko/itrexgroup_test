import Maze from "./Maze/Maze";
import Menu from "./Menu/Menu";
import RateCurrency from "./RateCurrency/RateCurrency";
import { Switch, Route } from "react-router-dom";
import style from "./App.module.css"

const App = () => {
  return (
    <div className={style.app}>
      <div >
        <Menu />
      </div>
      <div>
        <Switch>
          <Route path="/maze" render={() => <Maze />} />
          <Route path="/ratecurrency" render={() => <RateCurrency />} />
        </Switch>
      </div>
      <hr />
      <div>
        <h3 style={{ color: "orange" }}>Task for ITRex 25/06/2021</h3>
      </div>
    </div>
  );
};

export default App;
