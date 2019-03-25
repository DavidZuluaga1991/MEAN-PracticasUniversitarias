import { User } from './users';
import { Internships } from './internships';

export interface IUsersInternships {
  _id?: string;
  users: string;
  internships: string;
}
export interface IAllUsersInternships {
  users: User;
  internships: Internships;
}
export class UsersInternships implements IUsersInternships {
  // tslint:disable-next-line:variable-name
  _id?: string;
  users: string;
  internships: string;
  constructor(ui: IUsersInternships) {
    this._id = ui._id;
    this.users = ui.users;
    this.internships = ui.internships;
  }
}
export class AllUsersInternships implements IAllUsersInternships {
  users: User;
  internships: Internships;
  constructor(ui: IAllUsersInternships) {
    this.users = ui.users;
    this.internships = ui.internships;
  }
}


