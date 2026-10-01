import "./CommonPrayers.css";

import { apostlesCreed, holyMary, ourFather } from "../data/commonPrayers";
import { ColumnBlock } from "../components/ColumnWrapper";

function PrayerBlock({ item }) {
    return (
        <div>
            {item.map((verse, index) => (
                <p key={index}>{verse}</p>
            ))}
        </div>
    );
}

export default function CommonPrayers() {
    return (
        <section className="content">
            <h2 className="page-title">Orações Comuns</h2>

            {[holyMary, ourFather, apostlesCreed].map((item, index) => (
                <div className="columns-wrap" key={index}>
                    {item.map((item, index) => (
                        <ColumnBlock
                            title={item.title}
                            items={item.verses}
                            key={index}
                            ItemComponent={PrayerBlock}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
}
