import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateSchema1649863692200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const data = `
            create table tasks ( 
                id varchar(36) not null, 
                name varchar(255) not null, 
                done boolean not null,
                primary key (id)
            );`
        await queryRunner.query(data.toString())
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const data = "drop table tasks;"
        await queryRunner.query(data.toString())
    }

}
