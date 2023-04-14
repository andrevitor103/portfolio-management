import { Cnpj } from "./Cnpj";
import { Cpf } from "./Cpf";
import { Document } from "./Document";

export class DocumentFactory {
    static create(value: string): Document {
        if (Cpf.validate(value)) {
            return new Cpf(value)
        }
        if (Cnpj.validate(value)) {
            return new Cnpj(value)
        }
        throw new Error(`Value not is valid document: [${value}]`)
    }
}
