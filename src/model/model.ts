export interface User {
    accessToken: string;
    address: string;
    avatarUrl: string;
    age: number;
    createdAt: string;
    email: string;
    name: string;
    updatedAt: string;
    __v: 0;
    _id: string;
}
export interface Shoes {
    userID: string;
    size: number;
    quantity: number;
    price: number; // dollar
    imageShoes: string;
}
export interface CartShoes {
    _id: string;
    userID: string;
    size: number;
    quantity: number;
    price: number;
    imageShoes: string;
    createdAt: string;
    updatedAt: string;
    __v: 0;
}
export interface ErrorType {
    code: number;
    message: string;
}
