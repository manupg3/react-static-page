import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Page404 from "../pages/404page";
import HomePage from "../pages/home";
import ManagementPage from "../pages/management";
import InvestPage from "../pages/invest";
import AdvisorPage from "../pages/advisor";
import ContactPage from "../pages/contact";
import AboutPage from "../pages/about";
import HowItWorks from "../pages/how-it-works";





const RoutesApp = () => (
    <Routes>

        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutPage />} /> 
        <Route exact path='/management' element={<ManagementPage />} />
        <Route exact path='/invest' element={<InvestPage />} />
        <Route exact path='/advisor' element={<AdvisorPage />} />
        <Route exact path='/how-it-works' element={<HowItWorks />} />
        <Route exact path='/contact' element={<ContactPage />} />

        <Route element={<Page404 />} />
    </Routes>
);

export default RoutesApp;