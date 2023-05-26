import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class EarthworkExcavator {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("int")
  public earthId: number;

  @Column("varchar", { length: 20 })
  public type: string;

  @Column("varchar", { length: 20 })
  public name: string;

  @Column("smallint")
  public qty: number;

}