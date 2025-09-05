import React, { useEffect, useState, Suspense } from "react";
import ChatSkeleton from "./ChatSkeleton";

export default function Chat() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simula carregamento de dados
    setTimeout(() => {
      setMessages([
        { text: "Recebendo os dados", type: "start" },
        { text: "Sem skeleton", type: "end" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col w-[62.5%] h-full pt-8">
      <h3 className="font-bold text-3xl">Translator Chat</h3>
      <div className="card bg-white h-5/6 border border-stone-300 shadow-lg ml-0 m-5 p-5 pt-8">
        <div className="flex-grow overflow-y-auto">
          {loading ? (
            <ChatSkeleton />
          ) : (
            messages.map((m, i) => (
              <div key={i} className={`chat chat-${m.type}`}>
                <div className="chat-bubble chat-bubble-info rounded-full">
                  {m.text}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex pt-5 w-full mt-auto gap-2">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  );
}
