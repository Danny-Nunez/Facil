import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinMarketCap: React.FC = () => {
  const [totalMarketCap, setTotalMarketCap] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('coinMarketCapData');
      const cachedTimestamp = localStorage.getItem('coinMarketCapTimestamp');

      if (cachedData && cachedTimestamp) {
        const parsedData = JSON.parse(cachedData);
        const timestamp = parseInt(cachedTimestamp, 10);

        // Check if cached data is not older than 5 minutes
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          setTotalMarketCap(parsedData.quote.USD.total_market_cap);
          console.log('Using cached data');
          return;
        }
      }

      try {
        const response = await axios.get('https://corsproxy.io/?https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_CMC_API_KEY,
          },
        });

        const json = response.data;
        const totalMarketCapUSD = json.data.quote.USD.total_market_cap;

        // Cache the data and timestamp
        localStorage.setItem('coinMarketCapData', JSON.stringify(json.data));
        localStorage.setItem('coinMarketCapTimestamp', Date.now().toString());

        setTotalMarketCap(totalMarketCapUSD);
      } catch (ex) {
        console.error('Error fetching data:', ex);
      }
    };

    fetchData();

    return () => {
    
    };
  }, []);

  return (
    <div>
      {totalMarketCap !== null ? (
        <div>${abbreviateNumber(totalMarketCap)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

// Function to abbreviate large numbers
function abbreviateNumber(value: number) {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const num = Math.abs(value);
  const suffixNum = Math.floor(Math.log10(num) / 3);
  const shortValue = parseFloat((num / Math.pow(10, suffixNum * 3)).toPrecision(2));
  const suffix = suffixes[suffixNum];
  const completeName = suffix === '' ? '' : suffix === 'K' ? 'Thousand' : suffix === 'M' ? 'Million' : suffix === 'B' ? 'Billion' : 'Trillion';
  return (value < 0 ? '-' : '') + shortValue + ' ' + completeName;
}



export default CoinMarketCap;

