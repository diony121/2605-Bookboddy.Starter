import { Routes, Route } from "react-router";
import BookList from "./bookComponents/BookList";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Error404 from "./Layout/Error404";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
