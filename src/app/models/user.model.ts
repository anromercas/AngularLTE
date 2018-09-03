export class User {
    constructor(
        public name: string,
        public surname: string,
        public secondsurname: string,
        public email: string,
        public password: string,
        public _id?: string,
        public role: string = 'LIDER',
        public image?: string,
    ) {}
}
