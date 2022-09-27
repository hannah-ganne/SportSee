import { useState, useEffect } from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from "recharts"
import '../utils/styles/RadarChart.css'

export default function App() {
    const [userPerformance, setUserPerformance] = useState([])
    let kinds = {}
    let data = []

    useEffect(() => {
        fetch('http://localhost:3000/user/12/performance')
            .then(res => res.json())
            .then(json => {
                kinds = json.data.kind
                data = json.data.data
                data.map(item => {
                    item.kind = kinds[item.kind.toString()]
                    return item
                })
                setUserPerformance(data)
                console.log(userPerformance)
            })
    }, [])

    return (
        <RadarChart
            cx={124}
            cy={100}
            outerRadius={80}
            width={260}
            height={258}
            data={userPerformance}
        >
        <PolarGrid stroke="#F2F2F2" radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
        <Radar
            name="Mike"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
        />
        </RadarChart>
    )
}