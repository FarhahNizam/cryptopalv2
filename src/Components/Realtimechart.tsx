import { observer } from 'mobx-react-lite';
import { useRef,useEffect } from 'react';
import { Chart, } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import 'chartjs-plugin-zoom';
import chartStore from '../stores/chartStore';
import WebSocketConnection from '../services/WebsocketConnection';
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
// Chart.register(CategoryScale, LinearScale, PointElement);

const RealTimeChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chart = useRef<Chart | null>(null);

  const data = {
    labels: chartStore.chartData.map((data) => ([
      data.time,

])),
    datasets: [
      {
        label: "First dataset",
        data: chartStore.chartData.map((data) => ([
          data.time,
          data.price,
])),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  useEffect(() => {
    // const chartRefCurrent = chartRef.current;
    // if (!chartRefCurrent) return;

    // const ctx = chartRefCurrent.getContext('2d');
    // if (!ctx) return;

    // console.log(chartStore.chartData)

    // chart.current = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: [],
    //     datasets: [
    //       {
    //         label: 'Bitcoin Price',
    //         data: chartStore.chartData.map((data) => ({
    //           x: data.time,
    //           y: data.price,
    //         })),
    //         borderColor: 'rgba(255, 99, 132, 1)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: {
    //       x: {
    //         display: true,
    //         type: 'time',
    //         time: {
    //           parser: 'HH:mm',
    //           tooltipFormat: 'HH:mm',
    //           unit: 'minute',
    //           displayFormats: {
    //             minute: 'HH:mm',
    //           },
    //         },
    //         title: {
    //           display: true,
    //           text: 'Time',
    //         },
    //       },
    //       y: {
    //         display: true,
    //         title: {
    //           display: true,
    //           text: 'Price',
    //         },
    //       },
    //     },
    //     plugins: {
    //       zoom: {
    //         zoom: {
    //           wheel: {
    //             enabled: true,
    //           },
    //           pinch: {
    //             enabled: true,
    //           },
    //           mode: 'xy',
    //         },
    //         pan: {
    //           enabled: true,
    //           mode: 'xy',
    //         },
    //       },
    //     },
    //   },
    // });

    // return () => {
    //   if (chart.current) {
    //     chart.current.destroy();
    //   }
    // };
  }, []);

  return (
    <div>
      <WebSocketConnection />
      {/* <canvas ref={chartRef} style={{ height: '500px', width: '80%' }} /> */}
      <Line data={data} />
    </div>
  );
};

export default observer(RealTimeChart);
