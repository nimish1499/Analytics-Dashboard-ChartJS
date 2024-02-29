import React from 'react'
import { Bar } from "react-chartjs-2";


const BarChart = ({data,aspectRatio}) => {
   
    return (
        <Bar data={data} options={{aspectRatio:aspectRatio,responsive:true}}/>
    )
}

export default BarChart