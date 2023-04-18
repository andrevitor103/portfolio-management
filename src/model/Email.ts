import { Contact } from "./Contact";

export class Email implements Contact {
    private email: string
    constructor(value: string) {
        this.email = value
    }

    getContact(): Contact {
        return this
    }

    getValue(): string {
        return this.email
    }

    static validate(value: string): boolean {
        return value.includes('@')
    }
}
