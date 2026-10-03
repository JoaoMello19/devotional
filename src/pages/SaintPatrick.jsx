import "./SaintPatrick.css";

const prayers = [
    [
        "Levanto-me, neste dia que amanhece,",
        "Por uma grande força, a invocação da Trindade,",
        "Pela fé na Tríade,",
        "Pela afirmação da unidade",
        "Do Criador da criação.",
    ],
    [
        "Levanto-me, neste dia que amanhece,",
        "Pela força do nascimento de Cristo e de seu batismo,",
        "Pela força de sua crucificação e sepultamento,",
        "Pela força de sua ressurreição e ascensão,",
        "Pela força de sua descida para o julgamento dos mortos.",
    ],
    [
        "Levanto-me, neste dia que amanhece,",
        "Pela força do amor dos Querubins,",
        "Em obediência aos Anjos,",
        "A serviço dos Arcanjos,",
        "Pela esperança da ressurreição e do prêmio,",
        "Pelas orações dos Patriarcas,",
        "Pelas previsões dos Profetas,",
        "Pela pregação dos Apóstolos,",
        "Pela fé dos Confessores,",
        "Pela inocência das Virgens santas,",
        "Pelos atos dos Bem-aventurados.",
    ],
    [
        "Levanto-me, neste dia que amanhece,",
        "Pela força do céu:",
        "Luz do sol,",
        "Clarão da lua,",
        "Esplendor do fogo,",
        "Pressa do relâmpago,",
        "Presteza do vento,",
        "Profundeza dos mares,",
        "Firmeza da terra,",
        "Solidez da rocha.",
    ],
    [
        "Levanto-me, neste dia que amanhece:",
        "Que a força de Deus me dirija,",
        "Que o poder de Deus me ampare,",
        "Que a sabedoria de Deus me guie,",
        "Que o olhar de Deus me vigie,",
        "Que o ouvido de Deus me ouça,",
        "Que a palavra de Deus me faça eloquente,",
        "Que a mão de Deus me guarde,",
        "Que o caminho de Deus me esteja à frente,",
        "Que o escudo de Deus me proteja,",
        "Que o exército de Deus me defenda",
        "Das armadilhas do demônio,",
        "Das tentações do vício,",
        "De todos os que me desejam mal,",
        "Longe e perto de mim,",
        "Agindo só ou em grupo.",
    ],
    [
        "Conclamo, hoje, tais forças a me protegerem contra o mal,",
        "Contra qualquer força cruel que me ameace corpo e alma,",
        "Contra a encantação de falsos profetas,",
        "Contra as leis negras do paganismo,",
        "Contra as leis falsas dos hereges,",
        "Contra a arte da idolatria,",
        "Contra feitiços de bruxas e magos,",
        "Contra saberes que corrompem o corpo e a alma.",
    ],
    [
        "Cristo guarde-me hoje",
        "Contra veneno, contra fogo,",
        "Contra afogamento, contra ferimento,",
        "Para que eu possa receber e desfrutar a recompensa.",
    ],
    [
        "Cristo comigo,",
        "Cristo à minha frente,",
        "Cristo atrás de mim,",
        "Cristo em mim,",
        "Cristo embaixo de mim,",
        "Cristo acima de mim,",
        "Cristo à minha direita,",
        "Cristo à minha esquerda,",
        "Cristo ao me deitar,",
        "Cristo ao me sentar,",
        "Cristo ao me levantar,",
        "Cristo no coração de todos a quem eu falar,",
        "Cristo na boca de todos os que me falarem,",
        "Cristo em todos os olhos que me virem,",
        "Cristo em todos os ouvidos que me ouvirem.",
    ],
    [
        "Levanto-me, neste dia que amanhece,",
        "Por uma grande força, pela invocação da Trindade,",
        "Pela fé na Tríade,",
        "Pela afirmação da Unidade,",
        "Pelo Criador da Criação.",
    ],
];

export default function SaintPatrick() {
    return (
        <section className="content">
            <h2 className="page-title">Couraça de São Patrício</h2>
            {prayers.map((verseGroup, index) => (
                <div key={index}>
                    {verseGroup.map((verse, index) => (
                        <p key={index}>{verse}</p>
                    ))}
                </div>
            ))}
        </section>
    );
}
