export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
export const appendChild = (parentElement: any, elementChildString: string) => {
    parentElement.appendChild(
        new DOMParser().parseFromString(elementChildString, 'text/html').body.lastElementChild
    );
};
export class User {
    constructor(
        public userName: string,
        public password: string,
        public fisrtName: string,
        public lastName: string,
        public born: Date,
        public avatar: string,
        public address: string,
        public phoneNumber: number
    ) {}
    getFullName(): string {
        return this.fisrtName + this.lastName;
    }
    getAge(): number {
        const currentDate = new Date();
        return currentDate.getFullYear() - this.born.getFullYear();
    }
    isValidPhoneNumber(): boolean {
        return this.phoneNumber.toString().length > 8 && this.phoneNumber.toString().length < 13;
    }
}
