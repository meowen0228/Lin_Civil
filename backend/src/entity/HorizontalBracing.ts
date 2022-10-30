import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class HorizontalBracing {
  @PrimaryGeneratedColumn("increment")
  public "ID": number;

  @Column("timestamp")
  public "Work_Date": Date;

  @Column("varchar", { length: 20 })
  public "Area": string;

  @Column("smallint")
  public "Mobile_Crane": number;

  @Column("smallint")
  public "Excavator_S": number;

  @Column("text")
  public "Content": string;
}