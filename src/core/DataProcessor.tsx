import { NumberFormatter } from "../model/NumberFormatter";
import { IFormatter } from "./IFormatter";

export class DataProcessor {
    private formatters: IFormatter[] = [];

    constructor(formatters: IFormatter[]) {
        this.formatters = formatters;
    }

    public process(fieldname: string, value: any): JSX.Element | string {
        for(const formatter of this.formatters) {
            if(formatter.keys.some(key => fieldname.toLowerCase().includes(key))) {
                return formatter.format(value);
            }
        }

        switch(typeof value) {
            case "number":
                const formatter = new NumberFormatter();
                return formatter.format(value);
            // ... define how to format other types of data
        }

        return value.toString();
    }
}