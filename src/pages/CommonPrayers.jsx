import "./CommonPrayers.css";

import { apostlesCreed, holyMary, ourFather } from "../data/commonPrayers";

function Prayer({ prayer }) {
    return (
        <div className="column-block" key={prayer.key}>
            <h3>{prayer.title}</h3>
            {prayer.verses.map((verseGroup) => (
                <div key={verseGroup}>
                    {verseGroup.map((verse) => (
                        <p key={verse}>{verse}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function CommonPrayers() {
    return (
        <section className="content">
            <h2 className="page-title">Orações Comuns</h2>

            {[holyMary, ourFather, apostlesCreed].map((item) => (
                <div className="columns-wrap" key={item[0].key}>
                    {item.map((item) => (
                        <Prayer prayer={item} key={item.key} />
                    ))}
                </div>
            ))}
        </section>
    );
}
