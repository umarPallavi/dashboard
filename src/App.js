import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { FiSettings } from "react-icons/fi";
import { Sidebar, Navbar, Footer } from "./components";
import {
  Ecommerce,
  Orders,
  Employee,
  Customers,
  Calendar,
  Kanban,
  Editor,
  ColorPicker,
  Line,
  Area,
  Pie,
  Bar,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from "./Pages";

import "./App.css";

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="main-div ">
          {/* Start Tooltip */}
          <div className="tooltip">
            <Tooltip title="Settings" placement="top">
              <button>
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          {/* End Tooltip */}

          {/* Start Sidebar */}
          {activeMenu ? (
            // open-sidebar
            <div className="open-sidebar">
              <Sidebar />
            </div>
          ) : (
            // close-sidebar
            <div className="close-sidebar">
              <Sidebar />
            </div>
          )}
          {/* End Sidebar */}

          {/* Start Navbar */}
          <div className={activeMenu ?  "half-navbar" : "full-navbar"}>
            <div className="navbar">
              <Navbar />
            </div>
            {/* End Navbar */}

            {/* Start roures */}
            <div style={{marginTop:'40px'}}>
              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/customers" element={<Customers />} />
                {/* App */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            {/* End Routes */}

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
