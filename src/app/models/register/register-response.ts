
export class RegisterModel {

    constructor(
        public id: string,
        public FirstName: string,
        public LastName: string,
        public NormaliziedUsername: string,
        public Email: string,
        public PhoneNumber: string,
        public Password: string,
        public token) {

    }

}
