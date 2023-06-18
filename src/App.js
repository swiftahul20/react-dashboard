import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import User from "./views/User";
import AddUser from "./views/AddUser";
import Dashboard from "./views/Dashboard";
import Layout from "./components/Layout";
import Settings from "./views/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="user-list" element={<User />} />
        </Route>
        <Route path="login" element={<div> this is login page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
