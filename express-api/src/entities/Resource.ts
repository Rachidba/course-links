import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';
import * as uuid from 'uuid';
import Lesson from './Lesson';

@Entity('resources')
export default class Resource {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  title: string;

  @Column('varchar', { length: 765 })
  description: string;

  @Column('varchar', { length: 255 })
  link: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.resources)
  lesson: Lesson;

  @BeforeInsert()
  addIdAndSlug(): void {
    this.id = uuid.v4();
  }
}
