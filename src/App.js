import "./App.css";
import ResponsiveDrawer from "./components/home/home";
import {LoginForm} from "./components/pages/LoginForm"
import {useEffect, useState} from "react";
function App() {
  const [open, setOpenDash] = useState(false);
  const [openLogin, setOpenLogin] = useState(true);
  const [userName, setUser] = useState("");
  console.log("hello", openLogin);

  return (
    <div>
     {openLogin && <LoginForm open={open} setOpenDash={setOpenDash} openLogin={openLogin} setOpenLogin={setOpenLogin} setUser= {setUser} /> }
     { open &&<ResponsiveDrawer setOpenDash={setOpenDash} setOpenLogin={setOpenLogin} userName={userName}  />} 
    </div>
  );
}

export default App;
