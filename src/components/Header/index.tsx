"use client";

export default function Header() {
  return (
    <div>
      <h1
      className="text-6xl
      font-bold
      text-blue-500
      hover:text-blue-50
      hover:bg-blue-500
      transition
      duration-1000"
      onClick={() => alert("Este é um alerta de teste")}>
        Aqui é a Home
      </h1>
    </div>
  );
}