import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lesson1 from "./pages/Lesson1.jsx";
import Lesson2 from "./pages/Lesson2.jsx";
import Lesson3 from "./pages/Lesson3.jsx";
import Lesson4 from "./pages/Lesson4.jsx";
import Lesson5 from "./pages/Lesson5.jsx";
import DiagramPage from "./pages/DiagramPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/1" element={<Lesson1 />} />
      <Route path="/lesson/2" element={<Lesson2 />} />
      <Route path="/lesson/3" element={<Lesson3 />} />
      <Route path="/lesson/4" element={<Lesson4 />} />
      <Route path="/lesson/5" element={<Lesson5 />} />
      <Route path="/diagram" element={<DiagramPage />} />
    </Routes>
  );
}
