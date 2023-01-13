import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App ">
      <Navbar/>

      {/* <div className="nitin"> */}
      <div className="welcome-richard">
        <h5 className="welcome ">welcome!</h5>
        <h1 className="richard"> Richard Potter</h1>
      </div>
      <Home />
      {/* </div> */}
    </div>
  );
}
export default App;