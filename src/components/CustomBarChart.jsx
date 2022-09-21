import "../utils/styles/CustomBarChart.css";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function App() {

  const [userActivity, setUserActivity] = useState([])
    
  useEffect(() => {
    fetch('http://localhost:3000/user/12/activity')
      .then(res => res.json())
      .then(json => {
        setUserActivity(json.data.sessions)
        console.log(userActivity)
      })
  }, [])

  return (
    <BarChart
      width={835}
      height={320}
      data={userActivity}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={7}
    >
      <CartesianGrid
        vertical={false}
        strokeDasharray="3 3" 
      />
      <XAxis 
        tickLine={false}
        stroke="#DEDEDE"
      />
      <YAxis
        orientation="right"
        tickLine={false} 
        axisLine={false}
      />
      <Tooltip 
        wrapperStyle={{border: "none"}}
        contentStyle={{ backgroundColor: "#E60000"}}
        itemStyle={{ color: "#FFFFFF", fontSize: 7 }}
      />
      <Legend 
        height={50}
        iconType="circle"
        iconSize={8}
        align="right"
        verticalAlign="top"
      />
      <Bar
        dataKey="kilogram"
        name="Poids (kg)"
        fill="#282D30"
        radius={[3.5, 3.5, 0, 0]} 
      />
      <Bar
        dataKey="calories"
        name="Calories brûlées (kCal)"
        fill="#E60000"
        radius={[3.5, 3.5, 0, 0]} 
      />
    </BarChart>
  );
}
