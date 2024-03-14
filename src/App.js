import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReadingsPage from "./pages/ReadingsPage";
import AdminPage from "./pages/AdminPage";
import BookDetailPage from "./pages/BookDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/readings" element={<ReadingsPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route
          path="/book-details/:bookId"
          element={<BookDetailPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
