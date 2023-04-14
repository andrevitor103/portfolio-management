import { Document } from "./Document";

export class Cpf implements Document {
    private value: string;

    constructor(value: string) {
        if (!Cpf.validate(value)) {
            throw new Error(`Is invalid CPF: [${value}]`);
        }
        this.value = value;
    }

    getDocument(): Document {
        return new Cpf(this.value);
    }

    static validate(value: string): boolean {
        return value.length == 11;
    }
}