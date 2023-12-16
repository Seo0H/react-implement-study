export type TodoServerData = {
  todo: string;
  id: number;
  isCompleted: boolean;
};

export type TodoClientData = {
  isModifying: boolean;
} & TodoServerData;
