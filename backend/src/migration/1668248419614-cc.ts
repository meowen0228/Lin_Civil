import { MigrationInterface, QueryRunner } from "typeorm";

export class cc1668248419614 implements MigrationInterface {
    name = 'cc1668248419614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "earthwork" DROP COLUMN "Work_Date"`);
        await queryRunner.query(`ALTER TABLE "earthwork" ADD "Work_Date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Work_Date"`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Work_Date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Work_Date"`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Work_Date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Work_Date"`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Work_Date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Work_Date"`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Work_Date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "earthwork" DROP COLUMN "Work_Date"`);
        await queryRunner.query(`ALTER TABLE "earthwork" ADD "Work_Date" TIMESTAMP NOT NULL`);
    }

}
