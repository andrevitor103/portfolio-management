import { Contact } from "./Contact";
import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer 
{
    private id: Uuid
    private name: string
    private document: Document
    private contacts: Array<Contact>

    private constructor(name: string, document: Document, contacts: Array<Contact>, id?: Uuid) {
        this.id = id ?? Uuid.generateRandom()
        this.name = name
        this.document = document
        this.contacts = contacts
    }

    static create(name: string, document: string, contacts: Array<Contact>, id?: Uuid): Customer 
    {
        const validDocument = DocumentFactory.create(document)
        return new Customer(name, validDocument, contacts, id)
    }

    public getId(): Uuid {
        return this.id        
    }

    public getName(): string {
        return this.name
    }

    public getContacts(): Array<Contact> {
        return this.contacts
    }

    public getDocument(): Document {
        return this.document
    }
}
