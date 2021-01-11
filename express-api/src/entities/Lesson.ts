import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import * as uuid from 'uuid';
import Resource from './Resource';
import { IsNotEmpty } from 'class-validator';

@Entity('lessons')
export default class Lesson {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  @IsNotEmpty()
  title: string;

  @Column('varchar', { length: 255 })
  slug: string;

  @Column('varchar', { length: 765 })
  description: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

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
