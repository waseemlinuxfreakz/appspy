import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Default.css";
import "./Global.css";
import "./Responsive.css";


// Header Footer
import Header from "./components/header_footer/header";
import Footer from "./components/header_footer/footer";


// Pages
import HomePage from "./components/pages/homepage/home";
import AndroidMonitoringPage from "./components/pages/android_monitoring/AndroidMonitoring";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path="/androidmonitoring" element={<AndroidMonitoringPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
