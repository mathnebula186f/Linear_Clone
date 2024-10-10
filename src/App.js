import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [groupingState, setGroupingState] = useState("Status");
  const [orderingState, setOrderingState] = useState("Priority");
  const [data, setData] = useState([]);  // State to hold the API data
  const [loading, setLoading] = useState(true);  // State to track loading status
  const [error, setError] = useState(null);      // State to track error

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);  // Save the API data to the state
      setLoading(false);  // Set loading to false after data is fetched
    } catch (error) {
      setError(error.message);  // Set error if API call fails
      setLoading(false);  // Set loading to false if there's an error
    }
  };

  // useEffect hook to make the API call when the component loads
  useEffect(() => {
    fetchData();
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F4F6FA" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "#fff", zIndex: 1000,padding:"10px" }}>
        <Header groupingState={groupingState} setGroupingState={setGroupingState} orderingState={orderingState} setOrderingState={setOrderingState} />
      </div>
      <div style={{ flexGrow: 1, marginTop: "60px", overflowY: "auto" }}>
        {/* Display loading message, error message, or the Main component with the fetched data */}
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Main data={data} groupingState={groupingState} orderingState={orderingState} />
        )}
      </div>
    </div>
  );
}

export default App;
