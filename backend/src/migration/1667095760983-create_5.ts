import { MigrationInterface, QueryRunner } from "typeorm";

export class create51667095760983 implements MigrationInterface {
    name = 'create51667095760983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_e3865fe74e2e9aa3a543d1823a5"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_eafc8522cbe67108bab3943d4df" PRIMARY KEY ("Work_Date", "Area")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_38a4ce0fb0584afcd4d1e84d731"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_0e764b437f9f5896131f0b5be93" PRIMARY KEY ("Work_Date", "Area")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_0e764b437f9f5896131f0b5be93"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_38a4ce0fb0584afcd4d1e84d731" PRIMARY KEY ("Work_Date")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_eafc8522cbe67108bab3943d4df"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_e3865fe74e2e9aa3a543d1823a5" PRIMARY KEY ("Work_Date")`);
    }

}
