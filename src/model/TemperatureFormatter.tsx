import { IFormatter } from "../core/IFormatter";

export class TemperatureFormatter implements IFormatter {
    public keys: string[] = ["temperature", "temp"];

    public format(value: any): string {
        return `${value}°C`;
    }
}