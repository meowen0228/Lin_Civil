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
  public userName: string;

  @Column("varchar", { length: 100 })
  public password: string;

  @Column("varchar", { length: 100 })
  public note: string;
}
