import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import User from "./views/User";
import AddUser from "./views/AddUser";
import Dashboard from "./views/Dashboard";
import Layout from "./components/Layout";
import Settings from "./views/Settings";
import UserList from "./views/UserList";
import EditUser from "./views/EditUser";
import Page404 from "./components/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
        <Route path="login" element={<div> this is login page</div>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
