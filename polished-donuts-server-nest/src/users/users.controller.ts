import {
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from './auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() signInDto: Record<string, any>) {
    return this.userService.loginUser(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('signup')
  signup(@Body() signUpDto: Record<string, any>) {
    return this.userService.createUser(signUpDto.first_name, signUpDto.last_name, signUpDto.email, signUpDto.password);
  }
}
