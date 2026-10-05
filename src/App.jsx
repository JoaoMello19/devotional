import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Rosary from "./pages/Rosary";
import Angelus from "./pages/Angelus";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import CommonPrayers from "./pages/CommonPrayers";
import { saintCatherine, saintPatrick } from "./data/specificPrayers";
import FullPrayer from "./pages/FullPrayer";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <SideBar
                menuOpen={menuOpen}
                closeMenu={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    setMenuOpen(false);
                }}
            />

            <main className="flex-column">
                <TopBar onClick={() => setMenuOpen(!menuOpen)} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rosary" element={<Rosary />} />
                    <Route path="/angelus" element={<Angelus />} />
                    <Route path="/common" element={<CommonPrayers />} />
                    <Route
                        path="/saint_patrick"
                        element={<FullPrayer prayer={saintPatrick} />}
                    />
                    <Route
                        path="/saint_catherine"
                        element={<FullPrayer prayer={saintCatherine} />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
