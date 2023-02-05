import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669988688115 implements MigrationInterface {
    name = 'ORM1669988688115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "earthwork" ADD "Note" text`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Note" text`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Note" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Note"`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Note"`);
        await queryRunner.query(`ALTER TABLE "earthwork" DROP COLUMN "Note"`);
    }

}
