export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface UserDB {
  id: string;
  name: string;
  email: string;
  age: number;
  role: USER_ROLES;
  created_at: string;
}

export interface UserModel {
  id: string;
  name: string;
  email: string;
  age: number;
  role: USER_ROLES;
  createdAt: string;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private age: number,
    private role: USER_ROLES,
    private createdAt: string
  ) {
  }
  public getId(): string {
    return this.id;
  }
  public setId(value: string): void {
    this.id = value;
  }
  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(value: string): void {
    this.email = value;
  }
  public getAge(): number {
    return this.age;
  }
  public setAge(value: number): void {
    this.age = value;
  }
  public getRole(): USER_ROLES {
    return this.role;
  }
  public setRole(value: USER_ROLES): void {
    this.role = value;
  }
  public getCreatedAt(): string {
    return this.createdAt;
  }
  public setCreatedAt(value: string): void {
    this.createdAt = value;
  }
  public toUserModel(): UserModel {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      age: this.age,
      role: this.role,
      createdAt: this.createdAt
    }
  }
  public toDbModel(): UserDB {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      age: this.age,
      role: this.role,
      created_at: this.createdAt
    }
  }
}