import "./ColumnWrapper.css";

export function ColumnBlock({ title, items, ItemComponent }) {
    return (
        <div className="column-block">
            <h3>{title}</h3>

            {items.map((item, index) => (
                <ItemComponent key={index} item={item} />
            ))}
        </div>
    );
}

export function ColumnWrapper({ children }) {
    return <div className="columns-wrap">{children}</div>;
}
