import { User } from "./userTypes";

export interface StateInterface {
  user: User | null;
  status: "pending" | "fullfiled" | "rejected" | null;
}
