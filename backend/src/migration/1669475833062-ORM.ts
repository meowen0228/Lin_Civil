import { MigrationInterface, QueryRunner } from "typeorm";

export class ORM1669475833062 implements MigrationInterface {
  name = 'ORM1669475833062'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "steel_and_form_detail" (id SERIAL NOT NULL, steelAndForm_id integer NOT NULL, type character varying(20) NOT NULL, name character varying(20) NOT NULL, qty smallint NOT NULL, CONSTRAINT "PK_1e0f4e8fe84bc2faf1647afabe0" PRIMARY KEY (id))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "steel_and_form_detail"`);
  }

}
