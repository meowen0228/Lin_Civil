import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Earthwork {
  @PrimaryGeneratedColumn("increment")
  public "ID": number;

  @Column("date")
  public "Work_Date": Date;

  @Column("varchar", { length: 20 })
  public "Area": string;

  @Column("smallint")
  public "Dump_Truck": number;

  @Column("text")
  public "Other": string;

  @Column("text")
  public "Content": string;
}
