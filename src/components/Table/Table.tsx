import React from "react";
import { IFormatter } from "../../core/IFormatter";
import { DataProcessor } from "../../core/DataProcessor";

import "./Table.css";

interface Props {
    data: any[];
    formatters: IFormatter[];
}

const Table: React.FC<Props> = ({ data, formatters }) => {
    
    const dataProcessor = new DataProcessor(formatters);

    const renderHeader = () => {
        if (data.length === 0) return null;

        return (
            <tr>
                {Object.keys(data[0]).map((key, index) => (
                    <th key={index}>{key}</th>
                ))}
            </tr>
        );
    };

    const renderRow = (row: any, index: number) => {
        return (
            <tr key={index}>
                {Object.keys(row).map((key, index) => (
                    <td key={index}>{dataProcessor.process(key, row[key])}</td>
                ))}
            </tr>
        );
    }

    const renderBody = () => {
        return data.map(((row, index) => renderRow(row, index)));
    }    

    // add a back button returning to the home
    return (
        <div>
            <div>
                <a href="/" className="nav_link">Return to Home</a>
            </div>
            <table>
                <thead>{renderHeader()}</thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </div>
    );
};

export default Table;