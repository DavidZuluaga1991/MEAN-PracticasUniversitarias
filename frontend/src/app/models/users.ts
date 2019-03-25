export interface IUsers {
  _id?: string;
  name: string;
  lastname: string;
  code: string;
  program: string;
  user: string;
  password: string;
  isadmin: boolean;
}
export class User implements IUsers {
  // tslint:disable-next-line:variable-name
  _id?: string;
  name: string;
  lastname: string;
  code: string;
  program: string;
  user: string;
  password: string;
  isadmin: boolean;

  constructor(u: IUsers) {
    this._id = u._id;
    this.name = u.name;
    this.lastname = u.lastname;
    this.code = u.code;
    this.program = u.program;
    this.user = u.user;
    this.password = u.password;
    this.isadmin = u.isadmin;
  }
}
