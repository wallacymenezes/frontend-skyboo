import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
