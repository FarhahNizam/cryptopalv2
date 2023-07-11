export const TopList24H=(currency:any)=>
`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`

export const fetchCryptoData = async (page: number) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&page=${page}`
    );
    const jsonData = await response.json();
    return jsonData.Data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

  
  
  
  