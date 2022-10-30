import { MigrationInterface, QueryRunner } from "typeorm";

export class create31667062154953 implements MigrationInterface {
    name = 'create31667062154953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "worker_data"."account" ("ID" SERIAL NOT NULL, "User_Name" character varying(50) NOT NULL, "Password" character varying(100) NOT NULL, CONSTRAINT "PK_05f931c9188bdf34110db3d42cb" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "worker_data"."earthwork" ("Work_Date" TIMESTAMP NOT NULL, "Area" character varying(20) NOT NULL, "Dump_Truck" smallint NOT NULL, "Other" text NOT NULL, "Content" text NOT NULL, CONSTRAINT "PK_23112f884dbbce5a9f0be90df35" PRIMARY KEY ("Work_Date"))`);
        await queryRunner.query(`CREATE TABLE "worker_data"."earthwork_excavator" ("id" SERIAL NOT NULL, "Earth_id" integer NOT NULL, "Type" character varying(20) NOT NULL, "Qty" smallint NOT NULL, CONSTRAINT "PK_cdcb4fa7f2cc5d7e9adaabd6e51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "worker_data"."horizontal_bracing" ("Work_Date" TIMESTAMP NOT NULL, "Area" character varying(20) NOT NULL, "Mobile_Crane" smallint NOT NULL, "Excavator_S" smallint NOT NULL, "Content" text NOT NULL, CONSTRAINT "PK_e3865fe74e2e9aa3a543d1823a5" PRIMARY KEY ("Work_Date"))`);
        await queryRunner.query(`CREATE TABLE "worker_data"."horizontal_bracing_material" ("id" SERIAL NOT NULL, "Bracing_id" integer NOT NULL, "Material" character varying(20) NOT NULL, "Qty" smallint NOT NULL, CONSTRAINT "PK_0ae7eaf9459674b430814b24fbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "worker_data"."steel_and_form" ("Work_Date" TIMESTAMP NOT NULL, "Area" character varying(20) NOT NULL, "Worker_TW" smallint NOT NULL, "Worker_TH" smallint NOT NULL, "Worker_NG" smallint NOT NULL, "Content" text NOT NULL, CONSTRAINT "PK_38a4ce0fb0584afcd4d1e84d731" PRIMARY KEY ("Work_Date"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "worker_data"."steel_and_form"`);
        await queryRunner.query(`DROP TABLE "worker_data"."horizontal_bracing_material"`);
        await queryRunner.query(`DROP TABLE "worker_data"."horizontal_bracing"`);
        await queryRunner.query(`DROP TABLE "worker_data"."earthwork_excavator"`);
        await queryRunner.query(`DROP TABLE "worker_data"."earthwork"`);
        await queryRunner.query(`DROP TABLE "worker_data"."account"`);
    }

}
