import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./form";
import Welcome from "./welcome";
import NotFound from "./notfound";

const App = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidCred, setIsValidCred] = useState(false);

  useEffect(() => {
    console.log(isValidCred, "cred");
    console.log(isValidEmail, "email");
  }, [isValidCred, isValidEmail]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Form
              setIsValidCred={setIsValidCred}
              setIsValidEmail={setIsValidEmail}
              isValidCred={isValidCred}
              isValidEmail={isValidEmail}
            />
          }
        />
        <Route
          exact
          path="/welcome"
          element={<Welcome isValidCred={isValidCred} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
