import { Contact } from "../model/Contact";
import { ContactFactory } from "../model/ContactFactory";

export class CustomerDTO {
    constructor(
        readonly name: string,
        readonly document: string,
        readonly contacts: Array<Contact>
    ) {
    }

    static create(data: any): CustomerDTO {
        const contacts = data.contacts.map((item: string) => {
            return ContactFactory.create(item)
        })
        return new CustomerDTO(data.name, data.document, contacts)
    }
}