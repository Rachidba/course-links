import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import * as uuid from 'uuid';
import Resource from './Resource';

@Entity('lessons')
export default class Lesson {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  title: string;

  @Column('varchar', { length: 255 })
  slug: string;

  @Column('varchar', { length: 765 })
  description: string;

  @OneToMany(() => Resource, (resource) => resource.lesson, {
    cascade: true,
  })
  @JoinColumn()
  resources: Resource[];

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
