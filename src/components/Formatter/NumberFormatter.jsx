import React from 'react';

const NumberFormatter = ({ value }) => {
  const formattedValue = Number(value).toFixed(2);
  return <div>{formattedValue.toString()}</div>;
};

export default NumberFormatter;
