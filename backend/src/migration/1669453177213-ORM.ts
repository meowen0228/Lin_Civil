import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669453177213 implements MigrationInterface {
  name = 'ORM1669453177213'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Mobile_Crane"`);
    await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Excavator_S"`);
    await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD type character varying(20) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN type`);
    await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Excavator_S" smallint NOT NULL`);
    await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Mobile_Crane" smallint NOT NULL`);
  }

}
