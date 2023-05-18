import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669453225667 implements MigrationInterface {
  name = 'ORM1669453225667'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Worker_TW"`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Worker_TH"`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Worker_NG"`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN type`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" ADD type character varying(20) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN type`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" ADD type character varying(50) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Worker_NG" smallint NOT NULL`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Worker_TH" smallint NOT NULL`);
    await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Worker_TW" smallint NOT NULL`);
  }

}
