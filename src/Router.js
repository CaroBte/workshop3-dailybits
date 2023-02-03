import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Quest from "./components/Quest";
import Login from "./components/Login";
import Stats from "./components/Stats";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/quest" element={<Quest />} />
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </>
    )
)