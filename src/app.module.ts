import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db',
  entities: [User, Product],
  synchronize: true
}

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(config),
    UserModule,
    ProductModule,
  ],
})
export class AppModule {}
