import {Routes, Route, Navigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";

function App() {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate replace to="/education" />} />
      </Routes>
      <div style={{margin:"50px auto"}} />
    </Container>
  );
}

export default App;
