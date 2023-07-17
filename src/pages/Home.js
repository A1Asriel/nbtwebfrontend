import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetchData('projects');
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Home Page</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
