import { MigrationInterface, QueryRunner } from "typeorm";

export class create61667097317713 implements MigrationInterface {
    name = 'create61667097317713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD "Type" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_0e764b437f9f5896131f0b5be93"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_4e8ced7fee063b7c641e00490fc" PRIMARY KEY ("Work_Date", "Area", "Type")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_4e8ced7fee063b7c641e00490fc"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_0e764b437f9f5896131f0b5be93" PRIMARY KEY ("Work_Date", "Area")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP COLUMN "Type"`);
    }

}
