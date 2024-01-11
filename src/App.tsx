import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List/List';
import Table from './components/Table/Table';
import { ImageFormatter } from './model/ImageFormatter';
import { TemperatureFormatter } from './model/TemperatureFormatter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DateFormatter from './model/DateFormatter';

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
    new DateFormatter(),
  ];

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home/>
          }>
          </Route>
          <Route path="/table" element={
            <Table data={data.Stationdata} formatters={formatters}/>
          }>
          </Route>
          <Route path="/list" element={
            <List data={data.Stationdata} formatters={formatters}/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
