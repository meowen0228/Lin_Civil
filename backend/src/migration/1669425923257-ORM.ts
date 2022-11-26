import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669425923257 implements MigrationInterface {
    name = 'ORM1669425923257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("ID" SERIAL NOT NULL, "User_Name" character varying(50) NOT NULL, "Password" character varying(100) NOT NULL, CONSTRAINT "PK_05f931c9188bdf34110db3d42cb" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "earthwork" ("ID" SERIAL NOT NULL, "Type" character varying(20) NOT NULL, "Work_Date" date NOT NULL, "Area" character varying(20) NOT NULL, "Content" text NOT NULL, CONSTRAINT "PK_1516ebc4120e9c3300d26a4c6e1" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "earthwork_excavator" ("ID" SERIAL NOT NULL, "Earth_id" integer NOT NULL, "Type" character varying(20) NOT NULL, "Name" character varying(20) NOT NULL, "Qty" smallint NOT NULL, CONSTRAINT "PK_ed9e826b274f453790561cad49b" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "horizontal_bracing" ("ID" SERIAL NOT NULL, "Work_Date" date NOT NULL, "Area" character varying(20) NOT NULL, "Mobile_Crane" smallint NOT NULL, "Excavator_S" smallint NOT NULL, "Content" text NOT NULL, CONSTRAINT "PK_5af9a552770de1c23ff755e5300" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "horizontal_bracing_material" ("ID" SERIAL NOT NULL, "Bracing_id" integer NOT NULL, "Type" character varying(20) NOT NULL, "Name" character varying(20) NOT NULL, "Qty" smallint NOT NULL, CONSTRAINT "PK_e32ac632823c3de95068a110650" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "steel_and_form" ("ID" SERIAL NOT NULL, "Work_Date" date NOT NULL, "Area" character varying(20) NOT NULL, "Type" character varying(50) NOT NULL, "Worker_TW" smallint NOT NULL, "Worker_TH" smallint NOT NULL, "Worker_NG" smallint NOT NULL, "Content" text NOT NULL, CONSTRAINT "PK_76b0d255e0a95cbde53ca29977e" PRIMARY KEY ("ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "steel_and_form"`);
        await queryRunner.query(`DROP TABLE "horizontal_bracing_material"`);
        await queryRunner.query(`DROP TABLE "horizontal_bracing"`);
        await queryRunner.query(`DROP TABLE "earthwork_excavator"`);
        await queryRunner.query(`DROP TABLE "earthwork"`);
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
