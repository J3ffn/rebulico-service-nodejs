export default class UserDocument {
  username: string;
  email: string;
  password: string;
  roles: string[];

  constructor(username: string, email: string, password: string, roles: string[] = ['user']) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}