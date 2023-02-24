
import Routing from "./Pages/Routes";



import Routing from "./Pages/Routes";
import Navbar from "./Components/ragini/Navbar"
import Home from "./Pages/Home";
import Header from "./Components/ragini/Header";
import Signup from "./Components/devarshi/Signup/Signup";
function App() {
  const baseURL = process.env.REACT_APP_URL;
  console.log(baseURL);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;