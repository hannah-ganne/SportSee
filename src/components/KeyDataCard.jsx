import '../utils/styles/KeyDataCard.css'

export default function KeyDataCard({ img, amount, type }) {

    return (
        <div className="info-card">
            <img src={img} alt="card icon" />
            <div>
                <h3>{amount.toLocaleString()}{type === 'Calories' ? ' kCal' : ' g'}</h3>
                <p>{type}</p>
            </div>
        </div>
    )
}