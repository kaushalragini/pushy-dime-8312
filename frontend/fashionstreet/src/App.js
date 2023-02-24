

import Routing from "./Pages/Routes";
import Navbar from "./Components/ragini/Navbar"
import Home from "./Pages/Home";
import Header from "./Components/ragini/Header";
import Signup from "./Components/devarshi/Signup/Signup";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
       <Header/> 
       <Routing />  
      
    </div>
  );
}

export default App;