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
  defaultInBox: TodoListItemProps[],
}

export interface TodoPageProps {
  onGoBack: ()=>void,
  list: TodoListItemProps[],
  onPressItem: (item: TodoListItemProps, index: number) => void,
  onClickCheck: (index: number) => void,
  isDone: boolean,
}

export interface HeaderProps {
  onGoBack: ()=>void,
  title: string,
}

export interface TodoListItemProps {
  title: string,
  content: string,
}

export interface DialogRefProps {
  showAdd: ()=>void,
  showUpdate: (item:TodoListItemProps, index: number)=>void,
}
// export interface RefObject<T> {
//   readonly current: T | null;
// }

export interface TodoListItemUpdateProps extends TodoListItemProps {
  index: number,
}

export interface BottomDialogProps {
  ref: any,
  onAdd: (item: TodoListItemProps)=>void,
  onUpdate: (item: TodoListItemUpdateProps)=>void,
  onDelete: (index: number)=>void,
}

export interface TodoItemProps extends TodoListItemProps {
  isLast: boolean,
  isDone: boolean,
  index: number,
  onPressItem: () => void,
  onClickCheck: (index: number) => void
}
