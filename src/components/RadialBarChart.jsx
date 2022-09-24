import { RadialBarChart, RadialBar, Legend } from "recharts"

export default function App({ score }) {
    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
    };
    
    return (
        <RadialBarChart
            width={258}
            height={258}
            cx={125}
            cy={140}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={score}
            >
            <RadialBar
                minAngle={15}
                cornerRadius={30 / 2}
                background
                clockWise
                dataKey="score"
            />
        </RadialBarChart>
    )
}