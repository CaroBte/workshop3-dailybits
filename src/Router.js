import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Stats from "./components/Stats";
import QuestPage from "./pages/QuestPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/quest" element={<QuestPage />} />
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </>
    )
)