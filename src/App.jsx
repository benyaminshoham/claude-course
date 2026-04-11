import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lesson1 from "./pages/Lesson1.jsx";
import DiagramPage from "./pages/DiagramPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/1" element={<Lesson1 />} />
      <Route path="/diagram" element={<DiagramPage />} />
    </Routes>
  );
}
