import { MigrationInterface, QueryRunner } from "typeorm";

export class orm1680969631528 implements MigrationInterface {
    name = 'orm1680969631528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "earthwork" ("id" SERIAL NOT NULL, "type" character varying(20) NOT NULL, "work_date" date NOT NULL, "area" character varying(20) array NOT NULL, "content" text NOT NULL, "note" text, CONSTRAINT "PK_84511fe25a42dca8282dbd07628" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "user_name" character varying(50) NOT NULL, "password" character varying(100) NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "earthwork_excavator" ("id" SERIAL NOT NULL, "earth_id" integer NOT NULL, "type" character varying(20) NOT NULL, "name" character varying(20) NOT NULL, "qty" smallint NOT NULL, CONSTRAINT "PK_cdcb4fa7f2cc5d7e9adaabd6e51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horizontal_bracing" ("id" SERIAL NOT NULL, "type" character varying(20) NOT NULL, "work_date" date NOT NULL, "area" character varying(20) array NOT NULL, "content" text NOT NULL, "note" text, CONSTRAINT "PK_71c2fedb5512d5d59f833edfbde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horizontal_bracing_material" ("id" SERIAL NOT NULL, "bracing_id" integer NOT NULL, "type" character varying(20) NOT NULL, "name" character varying(20) NOT NULL, "qty" smallint NOT NULL, CONSTRAINT "PK_0ae7eaf9459674b430814b24fbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "steel_and_form" ("id" SERIAL NOT NULL, "type" character varying(20) NOT NULL, "work_date" date NOT NULL, "area" character varying(20) array NOT NULL, "content" text NOT NULL, "note" text, CONSTRAINT "PK_52c5b5ff2af45e4de03b2a4d010" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "steel_and_form_detail" ("id" SERIAL NOT NULL, "steelAndForm_id" integer NOT NULL, "type" character varying(20) NOT NULL, "name" character varying(20) NOT NULL, "qty" smallint NOT NULL, CONSTRAINT "PK_52adf9175a8d529e3358d46860d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "steel_and_form_detail"`);
        await queryRunner.query(`DROP TABLE "steel_and_form"`);
        await queryRunner.query(`DROP TABLE "horizontal_bracing_material"`);
        await queryRunner.query(`DROP TABLE "horizontal_bracing"`);
        await queryRunner.query(`DROP TABLE "earthwork_excavator"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "earthwork"`);
    }

}
