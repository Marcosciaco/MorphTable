export class WeatherParser {

    public static parse(data: any) {
        return data.Conditions.map((condition: { 
            date: any; 
            Title: any; 
            WeatherCondition: any; 
            WeatherImgurl: any; 
            Temperatures: any; 
            WeatherDesc: any; 
            Reliability: any; 
            TempMaxmax: any; 
            TempMaxmin: any; 
            TempMinmax: any; 
            TempMinmin: any; 
            bulletinStatus: any; 
        }) => ({
            date: condition.date,
            title: condition.Title,
            weatherCondition: condition.WeatherCondition,
            weatherImgUrl: condition.WeatherImgurl,
            temperatures: condition.Temperatures,
            weatherDesc: condition.WeatherDesc,
            reliability: condition.Reliability,
            tempMaxMax: condition.TempMaxmax,
            tempMaxMin: condition.TempMaxmin,
            tempMinMax: condition.TempMinmax,
            tempMinMin: condition.TempMinmin,
            bulletinStatus: condition.bulletinStatus
        }));
    }
    }