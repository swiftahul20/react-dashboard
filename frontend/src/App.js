import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./views/User/AddUser";
import Dashboard from "./views/Dashboard";
import Layout from "./components/Layout";
import Settings from "./views/Settings";
import UserList from "./views/User/UserList";
import EditUser from "./views/User/EditUser";
import Page404 from "./components/Page404";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";


function App() {
  const [user, setLoginUser] = useState({});

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
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
