import "./App.css";
import ResponsiveDrawer from "./components/home/home";
import {LoginForm} from "./components/pages/LoginForm"
import {useState} from "react";
function App() {
  const [open, setOpenDash] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div>
     {openLogin && <LoginForm open={open} setOpenDash={setOpenDash} openLogin={openLogin} setOpenLogin={setOpenLogin} /> }
     { open &&<ResponsiveDrawer setOpenDash={setOpenDash} setOpenLogin={setOpenLogin} />} 
    </div>
  );
}

export default App;
