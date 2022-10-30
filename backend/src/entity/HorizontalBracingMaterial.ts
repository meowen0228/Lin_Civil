import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class HorizontalBracingMaterial {
  @PrimaryGeneratedColumn("increment")
  public "ID": number;

  @Column("int")
  public "Bracing_id": number;

  @Column("varchar", { length: 20 })
  public "Material": string;

  @Column("smallint")
  public "Qty": number;

}