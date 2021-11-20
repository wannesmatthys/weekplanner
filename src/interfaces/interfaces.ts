export interface IUser {
    id: number,
    name: string,
    email: string,
    providerId: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IAuthResponse {
    user: IUser,
    accessToken: string
}