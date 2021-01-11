import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';
import * as uuid from 'uuid';
import Lesson from './Lesson';
import { IsInt, Length, IsNotEmpty } from 'class-validator';

@Entity('resources')
export default class Resource {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  @IsNotEmpty()
  title: string;

  @Column('varchar', { length: 765 })
  @Length(0, 765)
  description: string;

  @Column('varchar', { length: 255 })
  @IsNotEmpty()
  link: string;

  @Column()
  @IsNotEmpty()
  @IsInt()
  order: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.resources)
  lesson: Lesson;

  @BeforeInsert()
  addIdAndSlug(): void {
    this.id = uuid.v4();
  }
}
