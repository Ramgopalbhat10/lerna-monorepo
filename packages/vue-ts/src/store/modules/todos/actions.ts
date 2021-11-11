import { ActionContext, ActionTree } from "vuex";
import { TodoActionTypes, TodoMutationType } from "@/@types";
import { RootState } from "@/store";
import { Mutations } from "./mutations";
import { State } from "./state";

type ActionArguments = Omit<ActionContext<State, RootState>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions<C = ActionArguments> = {
  [TodoActionTypes.GetTodoItems](context: C): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, RootState> & Actions = {
  async [TodoActionTypes.GetTodoItems]({ commit }) {
    commit(TodoMutationType.SetLoading, true);

    await sleep(1000);

    commit(TodoMutationType.SetLoading, false);
    commit(TodoMutationType.SetItem, [
      {
        id: 1,
        text: "Learn Vue 3 + TypeScript",
        completed: false,
      },
    ]);
  },
};
