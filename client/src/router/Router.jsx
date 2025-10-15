import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path='login' element={<Login />} />
                    <Route path='Register' element={<Register />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;