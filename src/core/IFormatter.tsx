export interface IFormatter {
    format: (value: any) => JSX.Element | string;
    keys: string[];
}