import { createStore, createLogger } from "vuex";
import { store as todos, TodoStore, TodoState } from "@/store/modules/todos";

export type RootState = {
  todos: TodoState;
};

export type Store = TodoStore<Pick<RootState, "todos">>;

const plugins =
  process.env.NODE_ENV === "development" ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    todos,
  },
});

export function useStore(): Store {
  return store as Store;
}
