import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  taskService: TasksService;
  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }
  helloWorld() {
    this.taskService.doSomething();
  }
}
