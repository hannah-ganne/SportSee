import { useState, useEffect } from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from "recharts"

export default function App() {
    const [performanceKind, setPerformanceKind] = useState({})
    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/user/12/performance')
            .then(res => res.json())
            .then(json => {
                setPerformanceKind(json.data.kind)
                setUserPerformance(json.data.data)
            })
    }, [])

    return (
        <RadarChart
            cx={130}
            cy={100}
            outerRadius={100}
            width={258}
            height={258}
            data={userPerformance}
        >
        <PolarGrid stroke="#F2F2F2" />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" />
        <Radar
            name="Mike"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
        />
        </RadarChart>
    )
}