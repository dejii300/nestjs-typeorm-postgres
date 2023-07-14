import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'chimdindu300',
	database: 'nestjsproject',
	synchronize: false,
	autoLoadEntities: true

};