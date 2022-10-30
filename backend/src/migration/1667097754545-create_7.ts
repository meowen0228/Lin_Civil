import { MigrationInterface, QueryRunner } from "typeorm";

export class create71667097754545 implements MigrationInterface {
    name = 'create71667097754545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork_excavator" RENAME COLUMN "id" TO "ID"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork_excavator" RENAME CONSTRAINT "PK_cdcb4fa7f2cc5d7e9adaabd6e51" TO "PK_ed9e826b274f453790561cad49b"`);
        await queryRunner.query(`ALTER SEQUENCE "worker_data"."earthwork_excavator_id_seq" RENAME TO "earthwork_excavator_ID_seq"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing_material" RENAME COLUMN "id" TO "ID"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing_material" RENAME CONSTRAINT "PK_0ae7eaf9459674b430814b24fbd" TO "PK_e32ac632823c3de95068a110650"`);
        await queryRunner.query(`ALTER SEQUENCE "worker_data"."horizontal_bracing_material_id_seq" RENAME TO "horizontal_bracing_material_ID_seq"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD "ID" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_b68a472d282aa5fd39c2bb75bc9"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_1499a87415149fbbecce36a0edb" PRIMARY KEY ("Work_Date", "Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD "ID" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_eafc8522cbe67108bab3943d4df"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_f1a46b45af5f3fccc2d298969b2" PRIMARY KEY ("Work_Date", "Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD "ID" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_4e8ced7fee063b7c641e00490fc"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_e38e79b8f559977f672ca771fca" PRIMARY KEY ("Work_Date", "Area", "Type", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_1499a87415149fbbecce36a0edb"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_b884359d9fd63f86aa77e219ff1" PRIMARY KEY ("Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_b884359d9fd63f86aa77e219ff1"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_1516ebc4120e9c3300d26a4c6e1" PRIMARY KEY ("ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_f1a46b45af5f3fccc2d298969b2"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_0c58dbda372736a93a5391a1aac" PRIMARY KEY ("Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_0c58dbda372736a93a5391a1aac"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_5af9a552770de1c23ff755e5300" PRIMARY KEY ("ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_e38e79b8f559977f672ca771fca"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_618cd7366da92d8709717e47157" PRIMARY KEY ("Area", "Type", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_618cd7366da92d8709717e47157"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_58a2253588c5f9fd0a430116bd5" PRIMARY KEY ("Type", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_58a2253588c5f9fd0a430116bd5"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_76b0d255e0a95cbde53ca29977e" PRIMARY KEY ("ID")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_76b0d255e0a95cbde53ca29977e"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_58a2253588c5f9fd0a430116bd5" PRIMARY KEY ("Type", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_58a2253588c5f9fd0a430116bd5"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_618cd7366da92d8709717e47157" PRIMARY KEY ("Area", "Type", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_618cd7366da92d8709717e47157"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_e38e79b8f559977f672ca771fca" PRIMARY KEY ("Work_Date", "Area", "Type", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_5af9a552770de1c23ff755e5300"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_0c58dbda372736a93a5391a1aac" PRIMARY KEY ("Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_0c58dbda372736a93a5391a1aac"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_f1a46b45af5f3fccc2d298969b2" PRIMARY KEY ("Work_Date", "Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_1516ebc4120e9c3300d26a4c6e1"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_b884359d9fd63f86aa77e219ff1" PRIMARY KEY ("Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_b884359d9fd63f86aa77e219ff1"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_1499a87415149fbbecce36a0edb" PRIMARY KEY ("Work_Date", "Area", "ID")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP CONSTRAINT "PK_e38e79b8f559977f672ca771fca"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" ADD CONSTRAINT "PK_4e8ced7fee063b7c641e00490fc" PRIMARY KEY ("Work_Date", "Area", "Type")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."steel_and_form" DROP COLUMN "ID"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP CONSTRAINT "PK_f1a46b45af5f3fccc2d298969b2"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" ADD CONSTRAINT "PK_eafc8522cbe67108bab3943d4df" PRIMARY KEY ("Work_Date", "Area")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing" DROP COLUMN "ID"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP CONSTRAINT "PK_1499a87415149fbbecce36a0edb"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" ADD CONSTRAINT "PK_b68a472d282aa5fd39c2bb75bc9" PRIMARY KEY ("Work_Date", "Area")`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork" DROP COLUMN "ID"`);
        await queryRunner.query(`ALTER SEQUENCE "worker_data"."horizontal_bracing_material_ID_seq" RENAME TO "horizontal_bracing_material_id_seq"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing_material" RENAME CONSTRAINT "PK_e32ac632823c3de95068a110650" TO "PK_0ae7eaf9459674b430814b24fbd"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."horizontal_bracing_material" RENAME COLUMN "ID" TO "id"`);
        await queryRunner.query(`ALTER SEQUENCE "worker_data"."earthwork_excavator_ID_seq" RENAME TO "earthwork_excavator_id_seq"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork_excavator" RENAME CONSTRAINT "PK_ed9e826b274f453790561cad49b" TO "PK_cdcb4fa7f2cc5d7e9adaabd6e51"`);
        await queryRunner.query(`ALTER TABLE "worker_data"."earthwork_excavator" RENAME COLUMN "ID" TO "id"`);
    }

}
