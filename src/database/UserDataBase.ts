import { User, UserDB } from "../models/user";
import { BaseDatabase } from "./BaseDataBase";


export class UserDataBase extends BaseDatabase {
  public static TABLE_NAME = "Users";
  public signup = async(User: UserDB): Promise<void> => {
    await BaseDatabase.connection(UserDataBase.TABLE_NAME).insert(User);
  }
  public getUserById = async(id: string): Promise<UserDB> => {
    const result = await BaseDatabase.connection(UserDataBase.TABLE_NAME).select("*").where({id});
    return result[0];
  }
  public editUser = async(User: UserDB): Promise<void> => {
    await BaseDatabase.connection(UserDataBase.TABLE_NAME).update(User).where({id: User.id});
  }
  public getUsers = async(): Promise<UserDB[]> => {
    const result = await BaseDatabase.connection(UserDataBase.TABLE_NAME).select("*");
    return result;
  }
  public deleteUser = async(id: string): Promise<void> => {
    await BaseDatabase.connection(UserDataBase.TABLE_NAME).delete().where({id});
  }
}