import { Route, Routes } from "react-router-dom";
import "./App.css";
import Games from "./components/Games";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
