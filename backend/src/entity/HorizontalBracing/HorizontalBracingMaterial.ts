import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class HorizontalBracingMaterial {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @PrimaryColumn("int")
  public bracingId: number;

  @Column("varchar", { length: 20 })
  public type: string;

  @Column("varchar", { length: 20 })
  public name: string;

  @Column("smallint")
  public qty: number;


}