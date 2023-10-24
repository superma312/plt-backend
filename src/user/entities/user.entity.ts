import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  age: number;

  @Field(() => [Product], { nullable: true })
  @OneToMany(() => Product, (product) => product.user)
  orders: Product[];
}
