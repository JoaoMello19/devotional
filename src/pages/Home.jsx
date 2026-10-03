import "./Home.css";
import saoBento from "../assets/sao_bento.jpg";

export default function Home() {
    return (
        <section className="content">
            <img src={saoBento} alt="" id="full-image" />
        </section>
    );
}
