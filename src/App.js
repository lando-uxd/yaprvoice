import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
        <Route exact path="/code_confirm" component={CodeConfirm} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
