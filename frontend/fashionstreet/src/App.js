import Routing from "./Pages/Routes";

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
