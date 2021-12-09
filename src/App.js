import "./App.css";
import ResponsiveDrawer from "./components/home/home";
import { LoginForm } from "./components/pages/LoginForm";
import { useEffect, useState } from "react";
function App() {
  //Check if open is in localStorage and set it to state else set it to false
  const [open, setOpenDash] = useState(() => {
    const localData = localStorage.getItem("open");
    return localData ? JSON.parse(localData) : false;
  });

  //Check if openLogin is in localStorage and set it to state else set it to true
  const [openLogin, setOpenLogin] = useState(() => {
    const localData = localStorage.getItem("openLogin");
    return localData ? JSON.parse(localData) : true;
  });

  //Check if username is in localStorage
  const [userName, setUser] = useState(() => {
    const localData = localStorage.getItem("userName");
    return localData ? JSON.parse(localData) : "";
  });

  //using localstorage to saver user credentials lese  set  to empty string
  useEffect(() => {
    localStorage.setItem("open", JSON.stringify(open));
    localStorage.setItem("openLogin", JSON.stringify(openLogin));
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [open, openLogin, userName]);

  return (
    <div>
      {openLogin && (
        <LoginForm
          open={open}
          setOpenDash={setOpenDash}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setUser={setUser}
        />
      )}
      {open && (
        <ResponsiveDrawer
          setOpenDash={setOpenDash}
          setOpenLogin={setOpenLogin}
          userName={userName}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;
