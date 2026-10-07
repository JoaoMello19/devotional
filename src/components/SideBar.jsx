import { NavLink } from "react-router-dom";

import "./SideBar.css";

import icons from "../assets/menu_icons";

import close from "../assets/close.png";
import crucifix from "../assets/crucifix.png";

function NavigationItem({ href = "#", title, icon, closeMenu }) {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive ? "active nav-link" : " nav-link"
            }
            onClick={closeMenu}
        >
            {({ isActive }) => (
                <>
                    <img
                        src={isActive ? icon.active : icon.default}
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
            icon: icons.home,
        },
        {
            link: "/angelus",
            title: "Angelus",
            icon: icons.angel,
        },
        {
            link: "/saint_patrick",
            title: "Couraça de São Patrício",
            icon: icons.shield,
        },
        {
            link: "/rosary",
            title: "Santo Terço",
            icon: icons.rosary,
        },
        {
            link: "/saint_catherine",
            title: "Oração a Santa Catarina",
            icon: icons.shield,
        },
        {
            link: "/saint_michael",
            title: "Oração a São Miguel Arcanjo",
            icon: icons.shield,
        },
        {
            link: "/common",
            title: "Orações",
            icon: icons.prayingHands,
        },
    ];

    return (
        <aside
            id="sidebar"
            className={menuOpen ? "open flex-column" : "flex-column"}
        >
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
                        closeMenu={closeMenu}
                    />
                ))}
            </nav>

            <span id="copyright">João Vitor de Mello Gomes @ 2026</span>
        </aside>
    );
}
