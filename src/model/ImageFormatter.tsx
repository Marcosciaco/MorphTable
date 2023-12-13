import { IFormatter } from "../core/IFormatter";

export class ImageFormatter implements IFormatter {
    public keys: string[] = ["image", "img"];
    
    public format(value: any) {
        return <img src={value} alt="img"/>;
    }
}