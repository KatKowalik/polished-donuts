import { UserService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    login(signInDto: Record<string, any>): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    signup(signUpDto: Record<string, any>): Promise<{
        first_name: string;
        last_name: string;
        email: string;
        password: string;
    }>;
}
