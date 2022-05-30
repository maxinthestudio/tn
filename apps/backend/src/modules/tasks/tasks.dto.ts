import { IsBoolean, IsNumber, IsString, IsUUID } from 'class-validator';
import { Task } from '../../model';

export class GenerateTasksRequestDTO {
  @IsNumber()
  quantity: number
}

export class MarkTaskRequestDTO {
  @IsUUID()
  id: string
}

class TaskDTO {
  @IsString()
  id: string

  @IsString()
  name: string

  @IsBoolean()
  done: boolean

  constructor(task: Task) {
    this.id = task.id
    this.name = task.name
    this.done = task.done
  }
}

export class GetTasksResponseDTO {
  tasks: Array<TaskDTO>

  constructor(tasks: Array<Task>) {
    this.tasks = tasks.map(task => new TaskDTO(task))
  }
}