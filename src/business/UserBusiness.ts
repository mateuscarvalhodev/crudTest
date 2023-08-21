import { UserDataBase } from '../database/UserDataBase';
import { DeleteUserInputDTO, DeleteUserOutputDTO } from '../dtos/deleteUser.dto';
import { EditUserInputDto, EditUserOutputDto } from '../dtos/editUser.dto';
import { signupInputDTO, signupOutputDTO } from '../dtos/signup.dto';
import { USER_ROLES, User, UserModel } from '../models/user';

export class UserBusiness {
  constructor(private userDataBase: UserDataBase) {
  }
  public getUsers = async (): Promise<UserModel[]> => {
    const usersDB = await this.userDataBase.getUsers();
    const users = usersDB.map(user => {
      return new User(user.id, user.name, user.email, user.age, user.role, user.created_at).toUserModel();
    })
    return users;
  }
  public signup = async (input: signupInputDTO): Promise<signupOutputDTO> => {
    const { name, email, age } = input;
    const id = Math.random().toString();
    const user = new User(id, name, email, age, USER_ROLES.NORMAL, new Date().toISOString());
    await this.userDataBase.signup(user.toDbModel());
    return { message: 'Usuário Enviado com sucesso!'}
  }
  public editUser = async (input: EditUserInputDto): Promise<EditUserOutputDto> => {
    const { id, name, email, age } = input;
    const oldUser = await this.userDataBase.getUserById(id);
    const newUser = new User(id, name || oldUser.name, email || oldUser.email, age || oldUser.age, oldUser.role, oldUser.created_at);
    await this.userDataBase.editUser(newUser.toDbModel());

    return { message: 'Usuário Alterado com sucesso!'};
  }
  public deleteUser = async (input: DeleteUserInputDTO): Promise<DeleteUserOutputDTO> => {
    await this.userDataBase.deleteUser(input.id);
    return { message: 'Usuário deletado com sucesso!'};
  }

}