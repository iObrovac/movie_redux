import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Movie from "./Movie";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieID" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
