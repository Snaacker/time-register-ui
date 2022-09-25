export interface UserAuthStatus {
  isAuthenticated?: Boolean
}

export interface User extends UserAuthStatus {
  id: String;
  accountId?: String;
  address?: String;
  email?: String;
  firstName?: String;
  lastName?: String;
  password?: String;
  phoneNumber?: String;
  roleName: String;
  userName: String;
};
