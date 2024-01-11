import { DataProcessor } from "../../core/DataProcessor";
import { IFormatter } from "../../core/IFormatter";
import "./List.css"

interface Props {
    data: any[];
    formatters: IFormatter[];
}

const List: React.FC<Props> = ({ data, formatters }) => {

    const dataProcessor = new DataProcessor(formatters);


    return (
        <div>
            <div>
                <a href="/" className="nav_link">Return to Home</a>
            </div>
            {data.map((item) => { 
                console.log(item);
               
                let color = "";
                let temp = (item.MinTemp + item.MaxTemp)/2;
                if(temp < -10){
                    color = "#7F9BC3";
                } else if(temp < 0){
                    color = "#4D6591";
                } else if(temp < 10){
                    color = "#C38A53";
                } else if(temp < 20){
                    color = "#BE704C";
                } else if(temp < 30){
                    color = "#AF4D4C";
                } else if(temp < 40){
                    color = "#9F294C";
                } else {
                    color = "#6E1531";
                }

                return (
                <div className="frame" style={{
                    background: `linear-gradient(90deg, ${color} 0%, #000000 100%)`
                }}>
                    <div className="left">
                        <div className="temperature">{dataProcessor.process("AvgTemp", (item.MinTemp + item.MaxTemp)/2)}</div>
                        <div className="image">{dataProcessor.process("ImgUrl", item.WeatherImgUrl)}</div>
                    </div>
                    <div className="city">{dataProcessor.process("CityName", item.CityName)}</div>
                    <div className="right">
                        <div className="info">{dataProcessor.process("date", item.date)}</div>
                        <div className="info">{dataProcessor.process("WeatherDesc", item.WeatherDesc)}</div>
                        <div className="info">{dataProcessor.process("MinTemp", item.MinTemp)}/{dataProcessor.process("MaxTemp", item.MaxTemp)}</div>
                    </div>
                </div>
            )})}
        </div>
    );
}

export default List;