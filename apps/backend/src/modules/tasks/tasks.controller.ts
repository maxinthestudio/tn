import { Body, Controller, Get, Inject, Post, Put } from '@nestjs/common';
import { GenerateTasksRequestDTO, GetTasksResponseDTO, MarkTaskRequestDTO } from './tasks.dto';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {

  @Inject()
  private readonly tasksService: TasksService

  @Get()
  async getTasks(): Promise<GetTasksResponseDTO> {
    const tasks = await this.tasksService.getTasks();
    return new GetTasksResponseDTO(tasks)
  }

  @Post()
  async generateTasks(@Body() { quantity }: GenerateTasksRequestDTO): Promise<GetTasksResponseDTO> {
    const tasksSaved = await this.tasksService.generateTasks(quantity);
    return new GetTasksResponseDTO(tasksSaved)
  }

  @Put()
  async markTask(@Body() { id }: MarkTaskRequestDTO): Promise<void> {
    await this.tasksService.markTask(id);
  }
}
