import { Pages } from "@/types";

export type AppState = {
  currentPage: Pages;
  isActive?: boolean;
};

export type SetAppIsActiveAction = {
  type: string;
  payload: boolean
}
