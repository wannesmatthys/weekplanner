export interface User {
    id: number,
    name: string,
    email: string,
    providerId: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IAuthResponse {
    user: User,
    accessToken: string
}