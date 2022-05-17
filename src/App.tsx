import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";
import UsersItemPage from "./components/UserItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavLink style={{ padding: 10 }} to="users">
        Users
      </NavLink>
      <NavLink style={{ padding: 10 }} to="todos">
        Todos
      </NavLink>
      <Routes>
        <Route path="users" element={<UserPage />} />
        <Route path="users/:id" element={<UsersItemPage />} />
        <Route path="todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
