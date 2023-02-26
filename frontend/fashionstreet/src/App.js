import Routing from "./Pages/Routes";
import Navbar from "./Components/ragini/Navbar";
import Home from "./Pages/Home";
import Header from "./Components/ragini/Header";
import Signup from "./Components/devarshi/Signup/Signup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "./Redux/Auth/Auth.actions";

function App() {
  const baseURL = process.env.REACT_APP_URL;
  console.log(baseURL);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
