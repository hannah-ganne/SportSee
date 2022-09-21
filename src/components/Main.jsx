import '../utils/styles/Main.css'
import CustomBarChart from './CustomBarChart'
import KeyDataCard from './KeyDataCard'
import { useState, useEffect } from 'react'
import caloriesIcon from '../assets/calories-icon.svg'
import proteinIcon from '../assets/protein-icon.svg'
import carbsIcon from '../assets/carbs-icon.svg'
import fatIcon from '../assets/fat-icon.svg'

export default function Main() {
    const [userName, setUserName] = useState('')
    const [score, setScore] = useState(null)
    const [keyData, setKeyData] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/user/12')
            .then(res => res.json())
            .then(json => {
                setUserName(json.data.userInfos.firstName)
                setScore(json.data.todayScore)
                setKeyData(json.data.keyData)
                console.log(keyData)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <h1>Bonjour, <span className="red">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <CustomBarChart />
            <section className="key-data">
                <KeyDataCard img={caloriesIcon} amount={keyData.calorieCount} type="Calories" />
                <KeyDataCard img={proteinIcon} amount={keyData.proteinCount} type="Proteines" />
                <KeyDataCard img={carbsIcon} amount={keyData.carbohydrateCount} type="Glucides" />
                <KeyDataCard img={fatIcon} amount={keyData.lipidCount} type="Lipides" />
            </section>
        </main>
    )
}