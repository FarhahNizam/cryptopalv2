import { action, makeAutoObservable, makeObservable, observable } from 'mobx';

interface ChartData {
  time: number;
  price: number;
}

class ChartStore {
  chartData: ChartData[] = [];

  constructor() {
    makeObservable(this, {
        chartData: observable,
        addChartData: action.bound,
    });
  }

  addChartData(time: number, price: number) {
    this.chartData.push({ time: time,price: price });

    if (this.chartData.length > 50) {
      this.chartData.shift();
    }
  }
}

const chartStore = new ChartStore();

export default chartStore;
