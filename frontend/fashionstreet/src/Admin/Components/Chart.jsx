import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "../styles/Chart.module.css";
import { useSelector } from "react-redux";
import { Skeleton } from "@chakra-ui/react";
const SalesChart = () => {
  const {
    loading,
    cartPercentage,
    checkoutPercentage,
    totalRevenue,
    conversionRate,
  } = useSelector((state) => state.adminStatsManager);

  const [userData, setUserData] = useState({
    labels: ["Conversion Rate", "Cart Percentage", "Checkout Percentage"],
    datasets: [
      {
        label: "Sales Performance",
        data: [conversionRate, cartPercentage, checkoutPercentage],
        backgroundColor: ["#7264f5", "#2fb38f", "hsla(283, 64%, 47%, 1.8)"],
      },
    ],
  });

  useEffect(() => {
    setUserData({
      labels: ["Conversion Rate", "Cart Percentage", "Checkout Percentage"],
      datasets: [
        {
          label: "Sales Performance",
          data: [conversionRate, cartPercentage, checkoutPercentage],
          backgroundColor: ["#7264f5", "hsla(283, 64%, 47%, 1.8)", "#2fb38f"],
        },
      ],
    });
  }, [cartPercentage, checkoutPercentage, totalRevenue, conversionRate]);

  return (
    <div className={styles.ChartBox}>
      <Skeleton isLoaded={!loading}>
        <Doughnut data={userData}></Doughnut>
      </Skeleton>
    </div>
  );
};

export default SalesChart;
