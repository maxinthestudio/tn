import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Task } from '../../model';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class TasksService {

  @Inject()
  private httpService: HttpService

  @InjectRepository(Task)
  private readonly taskRepository: Repository<Task>

  async getTasks(): Promise<Array<Task>> {
    return await this.taskRepository.find()
  }

  async generateTasks(quantity: number): Promise<Array<Task>> {
    // Getting remote tasks
    const { data: tasks } = await this.httpService.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`).toPromise()

    // Persisting all tasks in one shot
    const tasksSaved = await Promise.all(tasks.map(task => {
      return this.taskRepository.save({ id: uuidv4(), name: task, done: false })
    }))
    return tasksSaved
  }

  async markTask(id: string): Promise<void> {
    const { affected } = await this.taskRepository.update({ id, done: false }, { done: true })
    if (affected === 0) throw new BadRequestException('Task id not found')
  }

}
