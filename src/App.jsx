import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import MainContent from "./pages/MainContent/MainContent";
import Upload from "./pages/Upload/Upload";
// imported a date parser func from utilities
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  // declaring a state variable to keep track of the light/dark mode toggle state
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : ""
  );
  // Func that updates the state var and also adds the info to local storage
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
        <PageHeader colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<MainContent colorMode={colorMode} />} />
          <Route path="/:id" element={<MainContent colorMode={colorMode} />} />
          <Route path="/upload" element={<Upload colorMode={colorMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
