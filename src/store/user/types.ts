import { User } from "@/types";


export type UserState = {
  user?: User | null;
};

export type IdentifyUserAction = {
  type: string;
  payload: User
}
