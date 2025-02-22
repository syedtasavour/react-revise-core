import { useState, useEffect } from 'react';
import './App.css';
import { conf } from './conf/conf';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null); // State for API data

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=13")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("Fetched Data:", data); // Corrected placement
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Runs once on mount

  return (
    <div className="w-full">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Fetched Data:</h2>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
}

export default App;
