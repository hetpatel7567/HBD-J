import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import Confetti from "react-confetti";
import './App.css';
import FinalPage from './FinalPage';

function App() {
  const [ageTime, setAgeTime] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const navigate = useNavigate();

  const messages = [
    "Hello! You know what today is?",
    "It's a special day!",
    "Just kidding, it's your Birthday!",
    "Happy 18th Birthday Janvi! 🎉",
    "So, finally, you are getting your own UPI access, huh?",
  ];

  useEffect(() => {
    const birthDate = new Date("2007-02-17T00:00:00");
    const updateAge = () => {
      const now = new Date();
      setAgeTime(Math.floor((now - birthDate) / 1000));
    };
    updateAge();
    const interval = setInterval(updateAge, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNextMessage = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      navigate('/final');
    }
    if (messages[messageIndex] === "Just kidding, it's your birthday!") {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000); // Extend confetti runtime to 10 seconds
    }
    if (messages[messageIndex] === "Happy 18th Birthday Janvi! 🎉") {
      setShowParticles(true);
    }
  };

  return (
    <div className="App">
      {showConfetti && <Confetti className="fade-out" />}
      {showParticles && (
        <Particles
          options={{
            particles: {
              number: { value: 80 },
              move: { speed: 1 },
              size: { value: 3 },
              opacity: { value: 0.7 }
            }
          }}
        />
      )}
      <div className="background-blur"></div>
      <header className="App-header">
        {messages[messageIndex] === "Happy 18th Birthday Janvi! 🎉" ? (
          <div className="content">
            <h1 className="title">{messages[messageIndex]}
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
          </div>
        ) : (
          <h1 className="fade-in">{messages[messageIndex]}</h1>
        )}
        <button className="cssbuttons-io-button" onClick={handleNextMessage}>
          What????
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </header>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
