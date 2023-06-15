import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./views/User";
import Dashboard from "./views/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
    <Layout />
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
      </Routes> */}
    </BrowserRouter>
    // <div>
    //   <Navbar />
    //   <Sidebar />
    //   <Content />
    // </div>
  );
}

export default App;
