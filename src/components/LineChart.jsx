import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, Tooltip } from "recharts"
import '../utils/styles/LineChart.css'

export default function App() {

    const [averageSessions, setAverageSessions] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/user/12/average-sessions')
            .then(res => res.json())
            .then(json => {
                setAverageSessions(json.data.sessions)
            })
    }, [])
    
    const LineChartToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="line-tooltip">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
            }
        
            return null;
        }

    return (
        <LineChart width={258} height={100} data={averageSessions} >
            <defs>
                <linearGradient id="linear">
                <stop offset="0" stopColor="hsla(360, 100%, 100%, 0.4)" />
                <stop offset="100" stopColor="hsla(360, 100%, 100%, 1)" />
                </linearGradient>
            </defs>
            <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="url(#linear)"
                strokeWidth={2}
                activeDot={{ stroke: 'white', strokeWidth: 5, r: 7 }}
                dot={false}
            />
            <XAxis dataKey="day" tickLine={false} axisLine={false}/>
            <Tooltip
                offset={10}
                allowEscapeViewBox={{ x: true }}
                payload={averageSessions}
                content={<LineChartToolTip />}  
                wrapperStyle={{ outline: "none" }}
                itemStyle={{ color: "#FFFFFF", fontSize: 7 }}
            />
        </LineChart>
    )
}
