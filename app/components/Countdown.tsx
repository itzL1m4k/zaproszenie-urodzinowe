// components/Countdown.tsx
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-11-09T18:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return difference > 0 ? timeLeft : null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-6">
      {timeLeft ? (
        <div className="text-2xl text-white">
          <h2 className="font-bold">
            Do moich 18-tych urodzin pozostało:
          </h2>
          <p>
            {timeLeft.days} dni, {timeLeft.hours} godzin,{" "}
            {timeLeft.minutes} minut, {timeLeft.seconds} sekund
          </p>
        </div>
      ) : (
        <div className="text-2xl text-white">
          <h2 className="font-bold">To już dziś! 🎉</h2>
        </div>
      )}
    </div>
  );
};

export default Countdown;
