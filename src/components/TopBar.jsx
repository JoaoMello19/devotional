import menu from "../assets/menu.png";
import "./TopBar.css";

export default function TopBar({ onClick }) {
    return (
        <header id="topbar" className="flex-row">
            <button id="menu-button" onClick={onClick}>
                <img src={menu} alt="" id="menu-icon" />
            </button>
            <h1 id="title">Meu Devocionário</h1>
        </header>
    );
}
