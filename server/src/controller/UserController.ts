import {Get, Post, Delete, JsonController, Param, Body} from "routing-controllers";
import {User} from "../entity/User";

@JsonController("/users")
export class UserController {

    // Using Routing Controllers
    @Get()
    public getAll(): Promise<User[]> {
        return User.find();
    }

    @Get("/:userId")
    public getOne(@Param("userId") userId: number): Promise<User> {
        return User.findOneById(userId);
    }

    @Post()
    public save(@Body() user: any): Promise<User> {
        return User.save(user);
    }

    @Delete("/:userId")
    public remove(@Param("userId") userId: number): Promise<void> {
        return User.removeById(userId);
    }

}