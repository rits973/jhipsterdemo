export interface IBook {
    id?: number;
    book_name?: string;
    book_isbn_no?: string;
}

export class Book implements IBook {
    constructor(public id?: number, public book_name?: string, public book_isbn_no?: string) {}
}
