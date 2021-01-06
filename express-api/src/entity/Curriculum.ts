import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import * as uuid from 'uuid';
import Lesson from './Lesson';

@Entity('curriculums')
export default class Curriculum {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  title: string;

  @Column('varchar', { length: 255 })
  slug: string;

  @Column('varchar', { length: 765 })
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.curriculum)
  lessons: Lesson[];

  @BeforeInsert()
  addIdAndSlug(): void {
    this.id = uuid.v4();
    this.slug = this.title
      .toLowerCase()
      .split(' ')
      .join('-')
      .concat('-')
      .concat(this.id);
  }
}
