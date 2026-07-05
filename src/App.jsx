import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProjectsScreen from "./screens/ProjectsScreen.jsx";
import ArchiveScreen from "./screens/ArchiveScreen.jsx";
import ProjectDetailScreen from "./screens/ProjectDetailScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/archive" element={<ArchiveScreen />} />
        <Route path="/projects/:slug" element={<ProjectDetailScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>

      <Footer />
    </div>
  );
}
