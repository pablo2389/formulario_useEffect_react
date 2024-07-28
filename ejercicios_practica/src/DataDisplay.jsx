
import { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const loadedData = [
        { id: 1, name: 'Objeto 1' },
        { id: 2, name: 'Objeto 2' },
        { id: 3, name: 'Objeto 3' },
      ];

      setData(loadedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataDisplay;
