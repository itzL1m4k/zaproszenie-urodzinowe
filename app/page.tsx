import React from "react";
import Countdown from "./components/Countdown";
import Invitation from "./components/Invitation";

const HomePage = () => {
  return (
    <main>
      <Invitation />
      <Countdown /> {/* Dodaj odliczanie */}
    </main>
  );
};

export default HomePage;
