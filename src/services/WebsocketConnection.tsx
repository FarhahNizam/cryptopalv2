import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import chartStore from '../stores/chartStore';


// const key = {
//   btc: '2~Coinbase~BTC~USD'
// }

const WebSocketConnection = observer(({ name }: { name: string }) => {
  useEffect(() => {
    const apiKey = 'fda6a333ee629fa55a6d3911ec7f34981aecffa364b98731255a23e72127ac4e';
    const ccStreamer = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);

    ccStreamer.onopen = () => {
      const subRequest = {
        action: 'SubAdd',
        subs: [`2~Coinbase~${name}~USD`],
      };
      ccStreamer.send(JSON.stringify(subRequest));
    };

    ccStreamer.onmessage = (event) => {
      let parsedJSON = JSON.parse(event.data);

      if (parsedJSON['TYPE'] === '2') {
        Object.entries(parsedJSON).map(([key, value]) => {
          if (key === 'PRICE') {
            let price = parsedJSON['PRICE'];
            chartStore.addChartData(Date.now(), price);
          }
        });

        console.log(parsedJSON);
      }
      

      // if (parsedJSON['TYPE']=='2' && parsedJSON['PRICE']) {
      //   chartStore.addChartData(Date.now(), parsedJSON['PRICE']);
      // }

      
    };

    ccStreamer.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ccStreamer.close();
    };
  }, [name]);

  return null;
});

export default WebSocketConnection;
