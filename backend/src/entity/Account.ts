import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn("increment")
  public ID: number;

  @Column("varchar", { length: 50 })
  public User_Name: string;

  @Column("varchar", { length: 100 })
  public Password: string;
}
