import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import { AuthProvider } from "./context/AuthContext";
import VideoCall from "./pages/VideoCall";
import HomePage from "./pages/HomePage";
import History from "./pages/history";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/:url" element={<VideoCall />} />
            <Route path="/history" element={<History />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
