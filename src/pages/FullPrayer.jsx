import { saintPatrick } from "../data/specificPrayers";

export default function FullPrayer({ prayer }) {
    return (
        <section className="content">
            <h2 className="page-title">{prayer.title}</h2>
            {prayer.prayer.map((verseGroup, index) => (
                <div key={index}>
                    {verseGroup.map((verse, index) => (
                        <p key={index}>{verse}</p>
                    ))}
                </div>
            ))}
            {prayer.afterPrayer && <p className="annotation">{prayer.afterPrayer}</p>}
        </section>
    );
}
