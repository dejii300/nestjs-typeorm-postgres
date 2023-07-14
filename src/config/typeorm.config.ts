

import { config } from "dotenv";
import { Comment } from "src/items/entities/comment.entity";
import { Item } from "src/items/entities/item.entity";
import { Listing } from "src/items/entities/listing.entity";
import { Tag } from "src/items/entities/tag.entity";
import { DataSource } from "typeorm";


config();


export default new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'chimdindu300',
	database: 'nestjsproject',
	migrations: ['migrations/**'],
	entities: [Item, Listing, Comment, Tag],
    
	
});