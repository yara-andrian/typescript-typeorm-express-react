import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import {
  AreaChartCard,
  PieChartCard,
  StatIconCard,
  themeDark as theme,
  BarChartCard,
} from "react-sensei";
import "./App.css";

const series = [
  {
    name: "series1",
    data: [0, 35, 10, 44, 10, 0, 0],
  },
  {
    name: "series2",
    data: [0, 5, 35, 10, 64, 10, 0],
  },
  {
    name: "series3",
    data: [0, 20, 10, 30, 20, 28, 0],
  },
];

const series2 = [
  {
    name: "series1",
    data: [10, 35, 10, 44, 10, 10, 20, 30, 35, 10, 44, 10, 20, 30],
  },
  {
    name: "series2",
    data: [30, 45, 35, 10, 64, 10, 40, 30, 35, 10, 44, 10, 20, 10],
  },
];

const statList = [
  {
    label: "Revenue",
    value: "$34.5k",
  },
  {
    label: "Profit",
    value: "$2.5k",
  },
  {
    label: "Orders",
    value: "811",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3">
            <StatIconCard label="Revenue" value="$34k" icon="dollar-alt" />
          </div>
          <div className="col-6 col-lg-3">
            <StatIconCard label="Orders" value="811" icon="receipt-alt" />
          </div>
          <div className="col-6 col-lg-3">
            <StatIconCard label="Profit" value="$2.4k" icon="chart-line" />
          </div>
          <div className="col-6 col-lg-3">
            <StatIconCard label="Users" value="762" icon="user" />
          </div>
          <div className="order-lg-2 col-lg-6">
            <AreaChartCard
              cardTitle="Sales"
              statList={statList}
              series={series}
            />
          </div>
          <div className="order-lg-1 col-lg-3">
            <PieChartCard
              cardTitle="Earnings"
              label="Target"
              value="$53k"
              series={[30, 40, 45]}
            />
          </div>
          <div className="order-lg-3 col-lg-3">
            <BarChartCard
              cardTitle="Users"
              label="Today"
              value="234"
              series={series2}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
