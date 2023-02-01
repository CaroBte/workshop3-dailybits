import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Quest from "./components/Quest";
import Login from "./components/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Navbar />} >
                <Route path="/home" element={<Home />} />
                <Route path="/quest" element={<Quest />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </>
    )
)