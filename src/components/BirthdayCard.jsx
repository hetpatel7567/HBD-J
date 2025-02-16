import React, { useState } from 'react';
import './BirthdayCard.css';

function BirthdayCard() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="birthday-card">
      {submitted ? (
        <div className="message-display">
          <h2>Your Message:</h2>
          <p>{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Write a birthday message for Janvi:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default BirthdayCard;