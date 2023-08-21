import { ZodError } from 'zod'
import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { signupSchema } from '../dtos/signup.dto';
import { EditUserSchema } from '../dtos/editUser.dto';
import { DeleteUserSchema } from '../dtos/deleteUser.dto';

export class UserController {
  constructor(private userBusiness: UserBusiness) {

  }
  public signup = async (req: Request, res: Response) => {
    try {
      const input = signupSchema.parse(
        {
          name: req.body.name,
          email: req.body.email,
          age: req.body.age
        }
      );
      const output = await this.userBusiness.signup(input);
      res.status(201).send(output.message);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else {
        res.status(500).send('Erro inesperado')
      }
    }
  }
  public getUsers = async (req: Request, res: Response) => {
    try {
      const output = await this.userBusiness.getUsers();
      res.status(200).send(output);
    } catch (error) {
      console.log(error);
    }
  }
  public editUser = async (req: Request, res: Response) => {
    try {
      const input = EditUserSchema.parse({
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
      })
      const output = await this.userBusiness.editUser(input);
      res.status(200).send(output.message);
    }catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else {
        res.status(500).send('Erro inesperado')
      }
    }
  }
  public deleteUser = async (req: Request, res: Response) => {
    try {
      const input = DeleteUserSchema.parse({
        id: req.params.id
      })
      const output = await this.userBusiness.deleteUser(input);
      res.status(200).send('Usuário deletado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  }
}
