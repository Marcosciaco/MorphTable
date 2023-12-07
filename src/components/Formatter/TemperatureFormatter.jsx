import React from 'react';

const TemperatureFormatter = ({ value }) => {
  const formattedValue = Number(value).toFixed(1);
  return <span>{formattedValue} °C</span>;
};

export default TemperatureFormatter;
