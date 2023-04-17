import { Document } from "./Document";

export class Cnpj implements Document {
    private value: string;

    constructor(value: string) {
        if (!Cnpj.validate(value)) {
            throw new Error(`Is invalid CNPJ: [${value}]`);
        }
        this.value = value;
    }

    getDocument(): Document {
        return this
    }

    static validate(value: string): boolean {
        return value.length == 14;
    }
}
