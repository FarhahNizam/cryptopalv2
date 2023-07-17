import { makeAutoObservable } from 'mobx';

class CurrencyStore {
  selectedCurrency = 'USD';

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedCurrency(currency:any) {
    this.selectedCurrency = currency;
  }
}

const currencyStore = new CurrencyStore();
export default currencyStore;
