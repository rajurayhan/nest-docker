import { CreateTaskDto } from './../dto/create-task.dto';
import { Task } from './../model/task.model';
import { Injectable } from '@nestjs/common';
import { Status } from 'src/shared/status.enum';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(dto: CreateTaskDto): Task {
    const task: Task = {
      id: uuid(),
      title: dto.title,
      description: dto.description,
      status: Status.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  getTaskById(id: number) {
    return id;
  }
}
