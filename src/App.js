import logo from './logo.svg';
import './App.css';
import Home from 'Home';
import { Toaster } from "@/components/ui/toaster"
import React from 'react';
import { AlertDialogDemo } from 'PersonalComponents/Dialog';
import Duas from 'Component/Duas';
import RamadanFullTimings from 'Component/RamadanFullTimings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from 'Component/Layout';
import VisitorData from 'Component/VisitorData';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>

          <Route >

          <Route element={<AppLayout />}>

            < Route path="/" element={<Home />} />
            <Route path="/duas" element={<Duas />} />
            <Route path="/traffic" element={<VisitorData />} />

            <Route path="/ramadan_full_schedule" element={<RamadanFullTimings />} />

          </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
