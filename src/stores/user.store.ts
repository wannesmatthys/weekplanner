import type { IUser } from "src/interfaces/interfaces";
import { writable } from "svelte/store";

interface IUserStore {
    authenticated: boolean,
    user: IUser,
    accessToken: string
}

const userStore = writable<IUserStore>({
    authenticated: localStorage.getItem("accessToken") !== null,
    user: JSON.parse(localStorage.getItem("user")),
    accessToken: localStorage.getItem("accessToken")
});

export default userStore;