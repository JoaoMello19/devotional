import { NavLink } from "react-router-dom";

import "./SideBar.css";
import home from "../assets/home.png";
import homeActive from "../assets/home_active.png";
import rosary from "../assets/rosary.png";
import rosaryActive from "../assets/rosary_active.png";
import angel from "../assets/angel.png";
import angelActive from "../assets/angel_active.png";

import close from "../assets/close.png";
import crucifix from "../assets/crucifix.png";

function NavigationItem({ href = "#", title, icon, activeIcon, closeMenu }) {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive ? "active nav-link" : " nav-link"
            }
            onClick={closeMenu}>
            {({ isActive }) => (
                <>
                    <img
                        src={isActive ? activeIcon : icon}
                        className="nav-icon"
                        alt=""
                    />
                    <span>{title}</span>
                </>
            )}
        </NavLink>
    );
}

export default function SideBar({ menuOpen, closeMenu }) {
    const pages = [
        {
            link: "/",
            title: "Início",
            icon: home,
            activeIcon: homeActive,
        },
        {
            link: "/common",
            title: "Orações",
            icon: home,
            activeIcon: homeActive,
        },
        {
            link: "/rosary",
            title: "Santo Terço",
            icon: rosary,
            activeIcon: rosaryActive,
        },
        {
            link: "/angelus",
            title: "Angelus",
            icon: angel,
            activeIcon: angelActive,
        },
    ];

    return (
        <aside
            id="sidebar"
            className={menuOpen ? "open flex-column" : "flex-column"}>
            <button id="btn-close-sidebar" onClick={closeMenu}>
                <img src={close} alt="" />
            </button>
            <img src={crucifix} alt="" />
            <h1>Meu Devocionário</h1>
            <h2>Um caminho de fé, todos os dias</h2>

            <hr />

            <nav id="navigation" className="flex-column">
                {pages.map((page) => (
                    <NavigationItem
                        key={page.link}
                        title={page.title}
                        href={page.link}
                        icon={page.icon}
                        activeIcon={page.activeIcon}
                        closeMenu={closeMenu}
                    />
                ))}
            </nav>

            <span id="copyright">João Vitor de Mello Gomes @ 2026</span>
        </aside>
    );
}
