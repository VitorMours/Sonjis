export default function ChatSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Mensagem da esquerda */}
      <div className="chat chat-start">
        <div className="chat-bubble skeleton rounded-full p-0">
          <div className="h-4 w-28 m-2"></div>
        </div>
      </div>

      {/* Mensagem da direita */}
      <div className="chat chat-end">
        <div className="chat-bubble skeleton rounded-full p-0">
          <div className="h-4 w-20 m-2"></div>
        </div>
      </div>
    </div>
  );
}
