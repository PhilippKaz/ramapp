import LoginForm from "../login-form/login-form";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const API_URL = "http://92.62.112.106:5002/";

  const getWelcomeMessage = async () => {
    const headers = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${API_URL}users/`, {
      headers,
    });

    const data = await response.json();
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <div className="app">
      <LoginForm />
    </div>
  );
}

export default App;
