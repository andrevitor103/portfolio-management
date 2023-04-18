import { Contact } from "../../model/Contact";
import { ContactFactory } from "../../model/ContactFactory";

export class CustomerInputDTO {
    constructor(
        readonly name: string,
        readonly document: string,
        readonly contacts: Array<Contact>
    ) {
    }

    static create(data: any): CustomerInputDTO {
        const contacts = data.contacts.map((item: string) => {
            return ContactFactory.create(item)
        })
        return new CustomerInputDTO(data.name, data.document, contacts)
    }
}