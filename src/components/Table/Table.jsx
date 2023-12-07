import './Table.css';
import React from 'react';

const Table = ({ data, formatters }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row).map((field, fieldIndex) => {
              const formatter = formatters[field] || ((value) => value);
              const formattedValue = formatter({ value: row[field] });

              if (formattedValue.value) {
                return (
                  <td key={fieldIndex}>
                    {formattedValue.value}
                  </td>
                );
              }

              const renderedContent =
                React.isValidElement(formattedValue) || typeof formattedValue === 'string'
                  ? formattedValue
                  : String(formattedValue);

              return <td key={fieldIndex}>{renderedContent}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
