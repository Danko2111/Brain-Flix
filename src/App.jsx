import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./pages/MainContent/MainContent";
import Upload from "./pages/Upload/Upload";
// imported a date parser func from utilities
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  // declaring a state variable to keep track of the light/dark mode toggle state
  const [colorMode, setColorMode] = useState(localStorage.getItem("mode"));

  localStorage.setItem("mode", "");

  const toggleColorMode = () => {
    if (colorMode === "") {
      setColorMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setColorMode("");
      localStorage.setItem("mode", "");
    }
  };

  return (
    <BrowserRouter>
      <div className={`App ${colorMode}`}>
        <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<MainContent colorMode={colorMode} />} />
          <Route path="/:id" element={<MainContent colorMode={colorMode} />} />
          <Route path="/Upload" element={<Upload colorMode={colorMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
