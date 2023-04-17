import { Contact } from "./Contact";

export class Email implements Contact {
    private value: string
    constructor(value: string) {
        this.value = value
    }

    getContact(): Contact {
        return this
    }

    static validate(value: string): boolean {
        return value.includes('@')
    }
}
