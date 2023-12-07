import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import NumberFormatter from './components/Formatter/NumberFormatter';
import TemperatureFormatter from './components/Formatter/TemperatureFormatter';

const data = [
  { name: 'John Doe', age: 25, temperature: 30.5, number: 1234567890.9345739457037 },
  { name: 'Jane Doe', age: 30, temperature: 25.8, number: 1234567890.90568405684056 },
  // Add more data as needed
];

const formatters = {
  temperature: TemperatureFormatter,
  number: NumberFormatter,
};

const App = () => {
  return (
    <div className='container'>
      <h1>Formatted Table</h1>
      <Table data={data} formatters={formatters} />
    </div>
  );
};

export default App;
