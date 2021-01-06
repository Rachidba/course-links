import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';
import * as uuid from 'uuid';
import Curriculum from './Curriculum';

@Entity('lessons')
export default class Lesson {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  title: string;

  @Column('varchar', { length: 765 })
  description: string;

  @Column('varchar', { length: 255 })
  link: string;

  @ManyToOne(() => Curriculum, (curriculum) => curriculum.lessons)
  curriculum: Curriculum;

  @BeforeInsert()
  addIdAndSlug(): void {
    this.id = uuid.v4();
  }
}
