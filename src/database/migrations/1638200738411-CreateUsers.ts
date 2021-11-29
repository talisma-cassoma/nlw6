import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1638200738411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [{
                    "name" : "id", 
                    "type" : "uuid"
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
