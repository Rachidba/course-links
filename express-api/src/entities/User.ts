import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import * as uuid from 'uuid';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export default class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  @Length(6, 50)
  email: string;

  @Column()
  @Length(4, 100)
  password: string;

  @Column()
  @Length(2, 50)
  fname: string;

  @Column()
  @Length(2, 50)
  lname: string;

  @Column()
  @IsNotEmpty()
  role: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateData: Date;

  hashPassword(): void {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }

  @BeforeInsert()
  addIdAndSlug(): void {
    this.id = uuid.v4();
    this.hashPassword();
  }
}
