import { Status } from './../../shared/status.enum';
import { CreateTaskDto } from './../dto/create-task.dto';
import { Task } from './../model/task.model';
import { TasksService } from '../service/tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: Status,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
}
