import { MigrationInterface, QueryRunner } from "typeorm";

export class create41667095700912 implements MigrationInterface {
    name = 'create41667095700912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_23112f884dbbce5a9f0be90df35"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_b68a472d282aa5fd39c2bb75bc9" PRIMARY KEY ("Work_Date", "Area")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_b68a472d282aa5fd39c2bb75bc9"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_23112f884dbbce5a9f0be90df35" PRIMARY KEY ("Work_Date")`);
    }

}
