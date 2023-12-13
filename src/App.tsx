import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import { ImageFormatter } from './model/ImageFormatter';
import { TemperatureFormatter } from './model/TemperatureFormatter';

const App = () => {

  const [data, setData] = useState({Stationdata: []});

  useEffect(() => {
    fetch('https://tourism.opendatahub.com/v1/Weather?language=en&extended=true')
      .then(response => response.json())
      .then(data => setData(data));
  }
  , []);

  const formatters = [
    new TemperatureFormatter(),
    new ImageFormatter(),
  ];
  
  return (
    <div className='container'>  
      <Table data={data?.Stationdata} formatters={formatters} />
    </div>
  );
};

export default App;
