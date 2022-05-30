import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: string

  @Column('varchar', { name: 'name', nullable: false, length: 255 })
  name: string | null

  @Column('binary', { name: 'done', nullable: false })
  done: boolean | null
}
