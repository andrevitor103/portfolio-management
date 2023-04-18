import { Contact } from "./Contact";

export class Phone implements Contact {
    private phone: string
    constructor(value: string) {
        this.phone = value
    }
    
    getContact(): Contact {
        return this
    }
    
    getValue(): string {
        return this.phone
    }
    
    static validate(value: string): boolean {
        return !value.includes('@')
    }
}