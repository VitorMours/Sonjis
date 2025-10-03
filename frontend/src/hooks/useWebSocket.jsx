import { useState, useRef, useEffect } from "react";

const useWebSockets = (url) => {
  const [message, setMessage] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log("Conectando ao websocket");
      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage(data);
    };

    ws.current.onclose = () => {
      console.log("Desconectando do websocket");
      setIsConnected(false);
    };

    ws.current.onerror = (error) => {
      console.log("Erro dentro do websocket: " + error);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url]);

  const sendMessage = (data) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(data));
    }
  };

  return { message, isConnected, sendMessage };
};
