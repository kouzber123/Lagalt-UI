import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Views/MainPage";
import Profile from "./Views/Profile";
import Project from "./Views/Project";
import AddProject from "./Views/AddProject";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/project/:id" element={<Project />}/>
          <Route path="/project/add-project" element={<AddProject />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
