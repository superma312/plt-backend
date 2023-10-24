import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UserService } from 'src/user/user.service';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => Product, { name: 'createProduct' })
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    let user = await this.userService.findByEmail(createUserInput.email);

    if (!user) {
      user = await this.userService.createUser(createUserInput);
    }

    return this.productService.create(createProductInput, user);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }
}
