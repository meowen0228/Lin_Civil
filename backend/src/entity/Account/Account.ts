import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("varchar", { length: 50 })
  public user_name: string;

  @Column("varchar", { length: 100 })
  public password: string;
}
