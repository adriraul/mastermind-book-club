import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReadingsPage from "./pages/ReadingsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/readings" element={<ReadingsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
