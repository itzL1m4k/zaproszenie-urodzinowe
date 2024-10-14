import React from "react";
import Confetti from "./Confetti";

const Invitation = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white overflow-hidden">
      <Confetti />
      <div className="bg-[url('/background.jpg')] bg-cover bg-center text-white p-8 rounded-lg shadow-lg max-w-md text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 animate-pulse">
          Serdecznie zapraszam
        </h1>
        <p className="text-lg font-bold mb-2">
          💖 Karine Dzienniak 💖
        </p>
        <p className="text-lg mb-2">
          Na imprezę z okazji 18-tych urodzin
        </p>

        <div className="my-4 text-center mb-2 text-lg">
          <p>
            Impreza odbędzie się dnia{" "}
            <strong>9 listopada 2024</strong>
          </p>
          <p>
            o godzinie <strong>18:00</strong>
          </p>
        </div>

        <div className="my-4 text-center mb-12">
          <p>
            Adres:{" "}
            <strong>
              &quot;EXCLUSIVE&quot; ul. pajdaka 5B, Radomsko
            </strong>
          </p>
        </div>

        <div className="my-4 text-left mb-2 text-lg">
          <p>Proszę o potwierdzenie przybycia do</p>
          <p>
            Dnia: <strong>27.10.2024</strong>
          </p>
          <p>
            Nr Telefonu: <strong>502 471 250</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
