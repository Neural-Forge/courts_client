import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Chat from "./pages/chat";
import Map from "./components/map";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
