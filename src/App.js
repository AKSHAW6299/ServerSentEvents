import React, { useEffect, useState } from 'react';

const WeatherSSE = () => {
  // State to store the live weather data (temperature)
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the SSE connection (without a real server)
    const eventSource = new EventSource('data:application/json;charset=UTF-8,{}'); // Fake event source (we'll simulate it below)

    // Simulating SSE by emitting random temperature data every 3 seconds
    const fakeSSEEmitter = setInterval(() => {
      // Simulate a random temperature between -10°C and 40°C
      const randomTemperature = (Math.random() * 50 - 10).toFixed(2);
      setTemperature(randomTemperature);
      setLoading(false);
    }, 3000);

    // Cleanup on component unmount
    return () => {
      clearInterval(fakeSSEEmitter);
      eventSource.close();
    };
  }, []);

  if (loading) {
    return <div>Loading live weather report...</div>;
  }

  return (
    <div>
      <h1>Live Weather Report</h1>
      <h2>Current Temperature: {temperature}°C</h2>
    </div>
  );
};

export default WeatherSSE;
