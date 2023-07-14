import React, { useEffect, useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import search from '../Assets/search.svg';
import "../styles/crypto.css"
import searchnotfound from '../Assets/errorsearchresults.svg';
import { fetchCryptoData } from '../services/api';
import { useNavigate } from 'react-router-dom';

const tableStyle = {
  borderSpacing: '10px',
  width: '100%',
};

const thStyle = {
  padding: '10px',
  backgroundColor: '#f2f2f2',
};

const tdStyle = {
  padding: '20px',
};

interface CoinData {
  CoinInfo: {
    Id: string;
    ImageUrl: string;
    FullName: string;
    Name: string;
  };
  DISPLAY: {
    USD: {
      PRICE: string;
      CHANGEPCT24HOUR: number;
      HIGH24HOUR: number;
      LOW24HOUR: number;
    };
  };
}

const CryptoTable: React.FC = () => {
  const [data, setData] = useState<CoinData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
        );
        const jsonData = await response.json();
        setData(jsonData.Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((coin) =>
    coin.CoinInfo.FullName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCarouselItemClick = (coin: CoinData) => {
    navigate(`/coin-details/${coin.CoinInfo.Name}`, { state: { coin } });
  };

  return (
    <div className="containerStyle">
      <div className="card-style-cryptotable">
        <TextField
          sx={{
            width: '85%'
          }}
          label="Search currency here"
          variant="standard"
          value={searchTerm}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', margin: '20px' }}
        />
        <button className='icon-button' >
          <img className="search-icon" src={search} alt="Arrow Left" />
        </button>

        {filteredData.length > 0 ? (
          <table className="tableStyle">
            <tbody>
              {filteredData.map((coin) => (
                <tr key={coin.CoinInfo.Id}>
                  <td className="tdStyle">
                    <div className='tableimage-fullname'  onClick={() => handleCarouselItemClick(coin)} > 
                      <img
                        src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        height="60"
                        style={{ marginBottom: 10 }}
                      />
                      <span className='coindetails-symbol'>{coin.CoinInfo.FullName}</span>
                      <span className='markettable-symbol'>{coin.CoinInfo.Name}</span>
                    </div>
                  </td>
                  <td className="tdStyle">{coin.DISPLAY.USD.PRICE}</td>
                  <td className={coin.DISPLAY.USD.CHANGEPCT24HOUR > 0 ? "positive" : "negative"}>
                    {coin.DISPLAY.USD.CHANGEPCT24HOUR > 0 ? '+' : '-'}
                    {coin.DISPLAY.USD.CHANGEPCT24HOUR}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <img
              src={searchnotfound}
              alt="No results found"
              style={{ height: '20%', width: '30%', marginBottom: '10px' }}
            />
            <span className='error-title'>No results found.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;
