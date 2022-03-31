import {RoleModel} from "./role.model";

export interface UserModel {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: RoleModel;
}
