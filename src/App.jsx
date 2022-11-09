import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./pages/MainContent/MainContent";
import Upload from "./pages/Upload/Upload";
// imported a date parser func from utilities
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/:id" element={<MainContent />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
