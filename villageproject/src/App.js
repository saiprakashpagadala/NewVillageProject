import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Screens/Login/login";
import Screenone from "./components/Screens/ScreenOne/screenone";
import Screentwo from "./components/Screens/ScreenTwo/screentwo";
import Screenfour from "./components/Screens/ScreenFour/screenfour";
import Notfound from "./components/Screens/Notfound/notfound";
import Screenthree from "./components/Screens/ScreenThree/screenthree";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/screenone" element={<Screenone />} />
          <Route exact path="/screentwo" element={<Screentwo />} />
          <Route exact path="/screenthree" element={<Screenthree/>} />
          <Route exact path="/screenfour" element={<Screenfour />} />
          <Route path="*" element={< Notfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;