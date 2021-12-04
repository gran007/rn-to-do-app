export interface CommonState {
  loader: boolean;
}

export interface AuthState {
  userId: string | undefined;
}

type RootStackParamList = {
  login: undefined;
  todo: undefined;
};

interface NavigationProps {
  navigate: (name: string) => void
}

export interface LoginProps {
  navigation: NavigationProps
}

export interface TodoProps {
  navigation: NavigationProps
}

export interface TodoListItemProps {
  title: string,
  content: string,
}

export interface DialogRefProps {
  show: ()=>void
}
// export interface RefObject<T> {
//   readonly current: T | null;
// }

export interface BottomDialogProps {
  ref: any,
  onAdd: (item: TodoListItemProps)=>void,
}

export interface TodoItemProps extends TodoListItemProps {
  isLast: boolean,
  isDone: boolean,
  index: number,
  onPressItem: (listItem: TodoListItemProps, index: number) => void,
  onClickCheck: (index: number) => void
}
