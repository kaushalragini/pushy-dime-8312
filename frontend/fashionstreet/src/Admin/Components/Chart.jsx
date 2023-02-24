import React, { useState } from 'react'
import {Bar} from "react-chartjs-2"
import data from './ChartData'
import Chart from 'chart.js/auto';
import "../styles/Chart.css"
const SalesChart = () => {
    const [userData,setUserData]=useState({
        labels:data.map(e=>(e.month)),
        datasets:[{
            label:"Sales Performance",
            data:data.map(e=>e.sales),
            backgroundColor:["#7264f5","#2fb38f"]
        }]
    })
  return (
    <div className='Chart-box'>
        <Bar data={userData} ></Bar>
    </div>
  )
}

export default SalesChart
