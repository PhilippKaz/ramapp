import { Routes, Route } from "react-router-dom";
import LoginForm from "../login-form/login-form";
import HomePage from "../home-form/home-page";
import { RequireToken } from "../Auth/auth.js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/home"
          element={
            <RequireToken>
              <HomePage />
            </RequireToken>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
