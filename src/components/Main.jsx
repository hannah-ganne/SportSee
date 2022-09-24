import '../utils/styles/Main.css'
import CustomBarChart from './BarChart'
import KeyDataCard from './KeyDataCard'
import { useState, useEffect } from 'react'
import caloriesIcon from '../assets/calories-icon.svg'
import proteinIcon from '../assets/protein-icon.svg'
import carbsIcon from '../assets/carbs-icon.svg'
import fatIcon from '../assets/fat-icon.svg'
import CustomLineChart from './LineChart'
import CustomRadarChart from './RadarChart'
import RadialBarChart from './RadialBarChart'

export default function Main() {
    const [userName, setUserName] = useState('')
    const [score, setScore] = useState([])
    const [keyData, setKeyData] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/user/12')
            .then(res => res.json())
            .then(json => {
                setUserName(json.data.userInfos.firstName)
                setKeyData(json.data.keyData)
                setScore([...score, { score: (1 - json.data.todayScore), fill: '#FBFBFB' }, { score: json.data.todayScore, fill: '#FF0000' }])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {(userName && score && keyData) && <main>
            <h1>Bonjour, <span className="red">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className="main-charts">
                    <div>
                        <div className="bar-chart">
                            <CustomBarChart />     
                        </div>
                    <section className="square-charts">
                        <div className="chart-container line-chart">
                            <h3>Durée moyenne des sessions</h3>
                            <CustomLineChart />
                        </div>
                        <div className="chart-container radar-chart">
                            <CustomRadarChart />
                        </div>
                        <div className="chart-container radial-bar-chart">
                            <h3>Score</h3>
                            <RadialBarChart score={score} />
                            <p><span>{`${score[1].score * 100}%`}</span> de votre objectifs</p>
                        </div>        
                    </section>      
                </div>
                <section className="key-data">
                    <KeyDataCard img={caloriesIcon} amount={keyData.calorieCount} type="Calories" />
                    <KeyDataCard img={proteinIcon} amount={keyData.proteinCount} type="Proteines" />
                    <KeyDataCard img={carbsIcon} amount={keyData.carbohydrateCount} type="Glucides" />
                    <KeyDataCard img={fatIcon} amount={keyData.lipidCount} type="Lipides" />
                </section>
                
            </div>
        </main>}
        </>
    )
}