import { FC } from 'react';

export interface CommonState {
  loader: boolean;
}

export type ScreenProps = {
  name: string,
  component: FC,  
}