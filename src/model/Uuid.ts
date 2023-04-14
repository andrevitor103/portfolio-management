
import { v4 as uuid, validate as uuidValidate } from "uuid"

export class Uuid {
    private value: string

    constructor(value: string) {
        if (uuidValidate(value)) 
        {
            throw Error(`Value must be uuid v4 valid. Received value: ${value}`)
        }
        this.value = value  
    }

    static generateRandom(): Uuid {
        return new Uuid(uuid())
    }
}
