import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import Marks from "./components/Marks";
import Profile from "./components/Profile";
import More from "./components/More";
import Lists from "./components/Lists";
import Serach from "./components/Serach";

function App() {
  return (
    <div>
      <Navbar />
   <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Discover" element={<Discover />} />
        <Route exact path="Notifications" element={<Notifications />} />
        <Route exact path="Messages" element={<Messages />} />
        <Route exact path="Marks" element={<Marks />} />
        <Route exact path="Lists" element={<Lists />} />
        <Route exact path="Profile" element={<Profile />} />
        <Route exact path="More" element={<More />} />
      </Routes>
      <Serach/>
    </div>
  );
}

export default App;
