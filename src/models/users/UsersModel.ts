import { UserModel } from "./UserModel";

export interface UsersModel {
    data: UserModel[];
    page?: number;
    perPage?: number;
    total?: number;
    totalPages?: number;
}