import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669447556371 implements MigrationInterface {
    name = 'ORM1669447556371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "earthwork" DROP COLUMN "Area"`);
        await queryRunner.query(`ALTER TABLE "earthwork" ADD "Area" character varying(20) array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Area"`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Area" character varying(20) array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Area"`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Area" character varying(20) array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "steel_and_form" DROP COLUMN "Area"`);
        await queryRunner.query(`ALTER TABLE "steel_and_form" ADD "Area" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" DROP COLUMN "Area"`);
        await queryRunner.query(`ALTER TABLE "horizontal_bracing" ADD "Area" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "earthwork" DROP COLUMN "Area"`);
        await queryRunner.query(`ALTER TABLE "earthwork" ADD "Area" character varying(20) NOT NULL`);
    }

}
