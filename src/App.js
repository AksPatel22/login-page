import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./form";
import Welcome from "./welcome";
import NotFound from "./notfound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
