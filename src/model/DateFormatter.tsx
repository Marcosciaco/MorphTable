import { IFormatter } from "../core/IFormatter";

export default class DateFormatter implements IFormatter {
    public keys: string[] = ["date", "time"];
    
    public format(value: any) {
        return new Date(value).toLocaleString();
    }
}