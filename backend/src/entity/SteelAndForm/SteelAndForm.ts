import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SteelAndForm {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column("varchar", { length: 20 })
  public type: string;

  @Column("date")
  public work_date: Date;

  @Column("varchar", { length: 20, array: true })
  public area: string[];

  @Column("text")
  public content: string;

  @Column("text", { nullable: true })
  public note: string;
}
