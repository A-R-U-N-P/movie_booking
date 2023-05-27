export interface login {
    email: string,
    password: string
}

export enum AUTH {
    LOGIN = "oauth/token",
    FORET_PASSWORD = "oath/foget"
}