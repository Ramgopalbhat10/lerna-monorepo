import { TodoItem, TodoMutationType } from "@/@types";
import { MutationTree } from "vuex";
import { State } from "./state";

export type Mutations<S = State> = {
  [TodoMutationType.CreateItem](state: S, item: TodoItem): void;
  [TodoMutationType.SetItem](state: S, items: TodoItem[]): void;
  [TodoMutationType.CompleteItem](
    state: S,
    item: Partial<TodoItem> & { id: number }
  ): void;
  [TodoMutationType.SetLoading](state: S, value: boolean): void;
  [TodoMutationType.DeleteItem](
    state: S,
    item: Partial<TodoItem> & { id: number }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [TodoMutationType.CreateItem](state, item) {
    state.items.unshift(item);
  },
  [TodoMutationType.SetItem](state, items) {
    state.items = items;
  },
  [TodoMutationType.CompleteItem](state, newItem) {
    const item = state.items.findIndex((s) => s.id === newItem.id);
    if (item === -1) return;
    state.items[item] = { ...state.items[item], ...newItem };
  },
  [TodoMutationType.SetLoading](state, value) {
    state.loading = value;
  },
  [TodoMutationType.DeleteItem](state, item) {
    const itemIndex = state.items.findIndex((s) => s.id === item.id);
    state.items.splice(itemIndex, 1);
  },
};
