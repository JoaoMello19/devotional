import "./Home.css";
import saoBento from "../assets/sao_bento.jpg";

export default function Home() {
    return (
        <section className="content" id="home">
            <h2 className="page-title">Devocionário de João Mello</h2>
            <img src={saoBento} alt="" id="full-image" />
            <p className="justified">
                Seja bem-vindo ao meu devocionário particular, um espaço
                dedicado à oração, à reflexão e ao fortalecimento da fé. Aqui
                reúno algumas das orações e devoções que fazem parte da minha
                caminhada com Deus, para que este seja um lugar de encontro com
                Cristo e de proximidade com Nossa Senhora e os santos. Que, a
                cada visita, este espaço possa nos ajudar a reservar alguns
                minutos do dia para a oração e para aquilo que realmente
                importa.
            </p>
        </section>
    );
}
