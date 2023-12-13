import { IFormatter } from "../core/IFormatter";

export class NumberFormatter implements IFormatter {
    public keys: string[] = [""];
    
    public format(value: any): string {
        const formattedValue = Number(value).toFixed(2);
        return formattedValue.toString();
    }
}