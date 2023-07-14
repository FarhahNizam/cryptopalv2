import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import chartStore from '../stores/chartStore';

const WebSocketConnection = observer(({ name }: { name: string }) => {
  const ccStreamerRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const apiKey = 'fda6a333ee629fa55a6d3911ec7f34981aecffa364b98731255a23e72127ac4e';
    ccStreamerRef.current = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);

    ccStreamerRef.current.onopen = () => {
      subscribe();
    };

    ccStreamerRef.current.onmessage = (event) => {
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
    };

    ccStreamerRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (ccStreamerRef.current) {
        ccStreamerRef.current.close();
      }
    };
  }, [name]);

  const subscribe = () => {
    if (ccStreamerRef.current && ccStreamerRef.current.readyState === WebSocket.OPEN) {
      const subRequest = {
        action: 'SubAdd',
        subs: [`2~Coinbase~${name}~USD`],
      };
      ccStreamerRef.current.send(JSON.stringify(subRequest));
    }
  };

  return null;
});

export default WebSocketConnection;
