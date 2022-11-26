import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669475833062 implements MigrationInterface {
    name = 'ORM1669475833062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "steel_and_form_detail" ("ID" SERIAL NOT NULL, "SteelAndForm_id" integer NOT NULL, "Type" character varying(20) NOT NULL, "Name" character varying(20) NOT NULL, "Qty" smallint NOT NULL, CONSTRAINT "PK_1e0f4e8fe84bc2faf1647afabe0" PRIMARY KEY ("ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "steel_and_form_detail"`);
    }

}
