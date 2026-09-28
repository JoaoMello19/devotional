import "./Angelus.css";

const angelus = [
    {
        language: "Português",
        prayers: [
            {
                versicle: "O Anjo do Senhor anunciou a Maria.",
                response: "E ela concebeu do Espírito Santo.",
                afterPrayer: "Ave Maria",
            },
            {
                versicle: "Eis aqui a serva do Senhor.",
                response: "Faça-se em mim segundo a Vossa palavra.",
                afterPrayer: "Ave Maria",
            },
            {
                versicle: "E o Verbo de Deus se fez carne.",
                response: "E habitou entre nós.",
                afterPrayer: "Ave Maria",
            },
            {
                versicle: "Rogai por nós, Santa Mãe de Deus",
                response: "Para que sejamos dignos das promessas de Cristo.",
            },
            {
                versicle:
                    "Oremos: Infundi no nosso espírito a vossa graça, ó Pai; Vós que na anunciação do anjo nos revelastes a encarnação do vosso Filho, pela sua Paixão e Cruz, conduzi-nos à glória da ressurreição. Por Cristo, nosso Senhor.",
                response: "Amém.",
                afterPrayer: "Glória ao Pai",
            },
        ],
    },
    {
        language: "Latim",
        prayers: [
            {
                versicle: "Angelus Domini nuntiavit Mariae.",
                response: "Et concepit de Spiritu Sancto.",
                afterPrayer: "Ave Maria",
            },
            {
                versicle: "Ecce Ancilla Domini.",
                response: "Fiat mihi secundum Verbum tuum.",
                afterPrayer: "Ave Maria",
            },
            {
                versicle: "Et Verbum caro factum est.",
                response: "Et habitavit in nobis.",
                afterPrayer: "Ave Maria",
            },
            {
                versicle: "Ora pro nobis, Sancta Dei Genetrixs",
                response: "Ut digni efficiamur promissionibus Christi.",
            },
            {
                versicle:
                    "Oremus: Gratiam tuam quaesumus, Domine, mentibus nostris infunde; ut qui, angelo nuntiante, Christi Filii tui Incarnationem cognovimus, per passionem eius et crucem, ad resurrectionis gloriam perducamur.",
                response: "Amen.",
                afterPrayer: "Gloria Patris",
            },
        ],
    },
];

const Mark = ({ style, text }) => {
    return (
        <p>
            <span className="red-text">
                {style == "versicle" ? "℣. " : "℟. "}
            </span>
            {text}
        </p>
    );
};

function AngelusBlock({ prayer, key }) {
    return (
        <div className="angelus-block" key={key}>
            <Mark style={"versicle"} text={prayer.versicle} />
            <Mark style={"response"} text={prayer.response} />
            {prayer.afterPrayer && (
                <span className="annotation after-prayer">
                    ({prayer.afterPrayer})
                </span>
            )}
        </div>
    );
}

export default function Angelus() {
    return (
        <section className="content">
            <h2 className="page-title">Angelus</h2>

            <div id="columns-wrap">
                {angelus.map((item) => (
                    <div className="column-block" key={item.language}>
                        <h3>{item.language}</h3>
                        {item.prayers.map((prayer) => (
                            <AngelusBlock prayer={prayer} key={prayer} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
