import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState('');
  const [timeColor, setTimeColor] = useState('');
  const [userPartOfDay, setUserPartOfDay] = useState('');

  useEffect(() => {
    // Function to get the current time and update the state
    const getCurrentTime = () => {
      const now = moment();
      setCurrentTime(now.format('h:mm:ss A'));
    };

    // Update the current time every second
    const intervalId = setInterval(getCurrentTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle user input for part of the day
  const handlePartOfDayChange = (e) => {
    const partOfDay = e.target.value.toLowerCase();
    setUserPartOfDay(partOfDay);

    // Determine the color based on user input for part of the day
    if (partOfDay === 'morning') {
      setTimeColor('red');
    } else if (partOfDay === 'afternoon') {
      setTimeColor('green');
    } else if (partOfDay === 'evening') {
      setTimeColor('blue');
    } else {
      // Reset the color to default if the user enters an invalid value
      setTimeColor('');
    }
  };

  return (
    <div className="App">
      <h1>Current Time</h1>
      <p style={{ color: timeColor }}>{currentTime}</p>
      <label htmlFor="partOfDay">Enter part of the day (morning, afternoon, or evening):</label>
      <input
        id="partOfDay"
        type="text"
        value={userPartOfDay}
        onChange={handlePartOfDayChange}
      />
    </div>
  );
}

export default App;
