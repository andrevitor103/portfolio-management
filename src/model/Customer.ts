import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer 
{
    private id: Uuid;
    private name: string;
    private document: Document;
    private contact: Array<Contact>;

    private constructor(name: string, document: Document, contact: Array<Contact>) {
        this.id = Uuid.generateRandom()
        this.name = name
        this.document = document
        this.contact = contact
    }

    static create(name: string, document: string, contact: Array<Contact>): Customer 
    {
        const validDocument = DocumentFactory.create(document)
        return new Customer(name, validDocument, contact);
    }
}
