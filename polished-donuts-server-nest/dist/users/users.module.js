"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret = exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_model_1 = require("./users.model");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'User',
                    schema: users_model_1.UserSchema,
                },
            ]),
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.SECRET_KEY,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UserService],
    })
], UserModule);
exports.secret = process.env.SECRET_KEY;
//# sourceMappingURL=users.module.js.map