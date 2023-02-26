import Routing from "./Pages/Routes";
import Navbar from "./Components/ragini/Navbar";
import Home from "./Pages/Home";
import Header from "./Components/ragini/Header";
import Signup from "./Components/devarshi/Signup/Signup";
import Login from "./Components/devarshi/Login/Login";

function App() {
  const baseURL = process.env.REACT_APP_URL;
  console.log(baseURL);
  return (
    <div className="App">
      <Routing />
      {/* <Signup/>
      <Login/> */}
    </div>
  );
}

export default App;
