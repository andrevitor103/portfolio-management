import { Contact } from "./Contact";
import { Email } from "./Email";
import { Phone } from "./Phone";

export class ContactFactory {
    static create(value: string): Contact {
        if (Email.validate(value)) {
            return new Email(value)
        }
        if (Phone.validate(value)) {
            return new Phone(value)
        }
        throw new Error(`Value not is valid contact: [${value}]`)
    }
}
