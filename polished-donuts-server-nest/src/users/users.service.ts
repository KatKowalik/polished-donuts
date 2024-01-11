import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private users: User[];

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async loginUser(email: string, pass: string) {
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new UnauthorizedException();
    }

    const checkPassword = bcrypt.compareSync(pass, user.password);
    if (!checkPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  createUser() {}
}
