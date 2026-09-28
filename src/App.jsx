import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Rosary from "./pages/Rosary";
import Angelus from "./pages/Angelus";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <SideBar menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
            <main className="flex-column">
                <TopBar onClick={() => setMenuOpen(!menuOpen)} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rosary" element={<Rosary />} />
                    <Route path="/angelus" element={<Angelus />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
