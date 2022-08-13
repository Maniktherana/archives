import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navber";
import AppContent from "./components/AppContent";

function App() {
  return (
    <div className="bg-[#f4f4f4] min-h-[100vh]">
      <Navbar />
      <AppContent />
    </div>
  );
}

export default App;
