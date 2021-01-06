import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 255 })
    email: string;
  
    @Column('text')
    password: string;

}
