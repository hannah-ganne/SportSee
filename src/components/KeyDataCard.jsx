export default function KeyDataCard({img, amount, type}) {
    return (
        <div className="info-card">
            <img src={img} alt="card icon" />
            <h3>{amount}</h3>
            <p>{type}</p>
        </div>
    )
}