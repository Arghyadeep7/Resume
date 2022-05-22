import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
