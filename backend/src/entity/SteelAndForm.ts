import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SteelAndForm {
  @PrimaryGeneratedColumn("increment")
  public "ID": number;

  @Column("date")
  public "Work_Date": Date;

  @Column("varchar", { length: 20 })
  public "Area": string;

  @Column("varchar", { length: 50 })
  public "Type": string;

  @Column("smallint")
  public "Worker_TW": number;

  @Column("smallint")
  public "Worker_TH": number;

  @Column("smallint")
  public "Worker_NG": number;

  @Column("text")
  public "Content": string;
}
