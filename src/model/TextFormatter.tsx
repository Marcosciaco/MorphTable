import { IFormatter } from "../core/IFormatter";

export class TextFormatter implements IFormatter {
    public keys: string[] = [""];
    
    public format(value: any): string {
        return value.toString();
    }
}