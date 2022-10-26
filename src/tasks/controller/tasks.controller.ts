import { CreateTaskDto } from './../dto/create-task.dto';
import { Task } from './../model/task.model';
import { TasksService } from '../service/tasks.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() requestBody: CreateTaskDto): Task {
    return this.tasksService.createTask(requestBody);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
}
