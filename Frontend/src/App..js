import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import GamingInsights from "./components/GamingInsights";
import FraudDetection from "./components/FraudDetection";
import ReportConcern from "./components/ReportConcern";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/gaming-insights" component={GamingInsights} />
          <Route path="/fraud-detection" component={FraudDetection} />
          <Route path="/report-concern" component={ReportConcern} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
