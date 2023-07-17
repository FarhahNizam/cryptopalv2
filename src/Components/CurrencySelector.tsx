import React from 'react';
import { observer } from 'mobx-react';
import currencyStore from '../stores/CurrencyStore';
import '../styles/crypto.css';

const CurrencySelector = observer(() => {
  const handleCurrencyChange = (e:any) => {
    currencyStore.setSelectedCurrency(e.target.value);
  };

  return (
    <div className="currency-selector">
      <label htmlFor="currency">Select Currency:</label>
      <select
        id="currency"
        value={currencyStore.selectedCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
});

export default CurrencySelector;
