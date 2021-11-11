import { TodoItem } from "@/@types";

export type State = {
  loading: boolean;
  items: TodoItem[];
};

export const state: State = {
  loading: false,
  items: [],
};
