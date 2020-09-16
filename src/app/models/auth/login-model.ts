export interface LoginModel {
    username: string;
    password: string;
    keepLoggedin: boolean;
}
export interface LoginResponse {
    jwt: string;
}
