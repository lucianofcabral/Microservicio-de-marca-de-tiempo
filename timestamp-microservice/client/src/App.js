import React, { useState } from 'react';
import TimestampForm from './components/TimestampForm';
import TimestampResult from './components/TimestampResult';

function App() {
  const [timestamp, setTimestamp] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const handleTimestampSubmit = (inputTimestamp) => {
    setTimestamp(inputTimestamp);
    // Here you would typically make an API call to the server to get the formatted date
    // For now, let's just simulate the conversion
    const date = new Date(inputTimestamp);
    if (!isNaN(date.getTime())) {
      setFormattedDate(date.toUTCString());
    } else {
      setFormattedDate('Invalid Date');
    }
  };

  return (
    <div className="App">
      <h1>Timestamp Microservice</h1>
      <TimestampForm onSubmit={handleTimestampSubmit} />
      <TimestampResult timestamp={timestamp} formattedDate={formattedDate} />
    </div>
  );
}

export default App;