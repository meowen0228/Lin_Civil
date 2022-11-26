import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SteelAndForm {
  @PrimaryGeneratedColumn("increment")
  public "ID": number;

  @Column("varchar", { length: 20 })
  public "Type": string;

  @Column("date")
  public "Work_Date": Date;

  @Column("varchar", { length: 20, array: true })
  public "Area": string[];

  @Column("text")
  public "Content": string;
}
