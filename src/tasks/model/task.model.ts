import { Status } from './../../shared/status.enum';
export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
}
