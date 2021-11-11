export enum TodoActionTypes {
  GetTodoItems = "GET_ITEMS",
}

export enum TodoMutationType {
  CreateItem = "CREATE_ITEM",
  SetItem = "SET_ITEM",
  CompleteItem = "COMPLETE_ITEM",
  SetLoading = "SET_LOADING",
  DeleteItem = "DELETE_ITEM",
}

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};
