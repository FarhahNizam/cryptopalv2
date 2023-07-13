import { observer } from 'mobx-react-lite';
import { Chart, LineController, CategoryScale, LinearScale, PointElement } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import 'chartjs-plugin-zoom';
import chartStore from '../stores/chartStore';
import WebSocketConnection from '../services/WebsocketConnection';
import { Line } from 'react-chartjs-2';

Chart.register(LineController, CategoryScale, LinearScale, PointElement);

const RealTimeChart = () => {
  const data = {
    labels: chartStore.chartData.map((data) => data.time),
    datasets: [
      {
        label: 'Bitcoin Price',
        data: chartStore.chartData.map((data) => ({
          x: data.time,
          y: data.price,
        })),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time' as const,
        time: {
          parser: 'HH:mm:ss' as const,
          tooltipFormat: 'HH:mm:ss' as const,
          unit: 'minute' as const,
          displayFormats: {
            minute: 'HH:mm:ss' as const,
          },
        },
        title: {
          display: true,
          text: 'Time' as const,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price' as const,
        },
      },
    },
    plugins: {
      zoom: {
        drag:{
          enabled:true,
          mode:'xy' as const,
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy' as const,
        },
        pan: {
          enabled: true,
          mode: 'xy' as const,
        },
      },
    },
  };

  return (
    <div>
      <WebSocketConnection  name="BTC" />
      <Line data={data} options={options} style={{ height: '500px', width: '80%' }} />
    </div>
  );
};

export default observer(RealTimeChart);
