import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SteelAndFormDetail {
  @PrimaryGeneratedColumn("increment")
  public "ID": number;

  @Column("int")
  public "SteelAndForm_id": number;

  @Column("varchar", { length: 20 })
  public "Type": string;

  @Column("varchar", { length: 20 })
  public "Name": string;

  @Column("smallint")
  public "Qty": number;


}