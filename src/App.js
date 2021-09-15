import "./App.css";
import { Route } from "react-router-dom";
import Rates from "./Components/Rates/Rates.jsx";
import Conversion from "./Components/Conversion/Conversion.jsx";
import Conversion2 from './Components/Conversion/Conversion2.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path="/Rates" component={Rates}></Route>
      <Route exact path="/Conversion" component={Conversion}></Route>
      <Route exact path="/Conversion2" component={Conversion2}></Route>
      <Route path="/" component={Footer}></Route>
    </div>
  );
}

export default App;
