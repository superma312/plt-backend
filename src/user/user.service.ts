import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(input: CreateUserInput): Promise<User> {
    const { email } = input;
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['orders'],
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['orders'],
    });
  }
}
