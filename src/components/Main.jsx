import '../utils/styles/Main.css'
import CustomBarChart from './CustomBarChart'
import { useState, useEffect } from 'react'

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
                console.log(userName)
                console.log(score)
                console.log(keyData)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <h1>Bonjour, <span className="red">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <CustomBarChart />
        </main>
    )
}