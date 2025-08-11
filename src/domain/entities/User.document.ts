export default class UserDocument {
  _id?: string;
  username: string;
  email: string;
  password: string;
  roles: string[];

  constructor(
    username: string,
    email: string,
    password: string,
    roles: string[] = ["author"],
    _id?: string
  ) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}
