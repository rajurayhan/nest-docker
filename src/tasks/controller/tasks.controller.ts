import { CreateTaskDto } from './../dto/create-task.dto';
import { Task } from './../model/task.model';
import { TasksService } from '../service/tasks.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(dto: CreateTaskDto): Task {
    return this.tasksService.createTask(dto);
  }

  @Get(':id')
  getTaskById() {
    return this.tasksService.getTaskById(21511);
  }
}
