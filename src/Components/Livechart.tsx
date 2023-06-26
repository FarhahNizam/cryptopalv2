import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import { observable, action } from 'mobx';
import { ChartOptions } from 'chart.js/auto';
import 'chartjs-adapter-moment';

import {
    Chart as ChartJS,
    TimeScale, //Import timescale instead of category for X axis
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from "chart.js";
  
  ChartJS.register(
    TimeScale, //Register timescale instead of category for X axis
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

interface DataPoint {
  timestamp: Date;
  price: number;
}

const store = observable({
  chartData: [] as DataPoint[],

  updateChartData: action(function (newData: DataPoint[]) {
    store.chartData = newData;
  }),
});


const LiveChart = observer(() => {
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'second',
        },
        title: {
          display: true,
          text: 'Timestamp',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },

    plugins: {
        filler: {
          propagate: true,
        },
      },
  };

  const chartData = {
    labels: store.chartData.map((dataPoint) => dataPoint.timestamp),
    datasets: [
      {
        label: 'Live Data',
        data: store.chartData.map((dataPoint) => dataPoint.price),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: 'start',
      },
    ],
  };

  

  useEffect(() => {
    const apiKey = "fda6a333ee629fa55a6d3911ec7f34981aecffa364b98731255a23e72127ac4e";
    const ccStreamer = new WebSocket(
   `wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`
    );

    ccStreamer.onopen = () => {
      // Subscribe to the required data
      const subscription = {
        action: 'SubAdd',
        subs: ['2~Coinbase~BTC~USD'], // Replace with the desired subscription
      };
      ccStreamer.send(JSON.stringify(subscription));
    };

    ccStreamer.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data["PRICE"]) {
        const newData: DataPoint = {
          timestamp: new Date() ,
          price: data.PRICE,
        };
        store.updateChartData([...store.chartData, newData]);
      }
    };

    return () => {
      ccStreamer.close();
    };
  }, []);

  return <Line data={chartData} options={chartOptions} />;
});

export default LiveChart;
