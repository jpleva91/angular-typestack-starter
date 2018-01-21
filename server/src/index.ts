import "reflect-metadata";
import {createConnection} from "typeorm";
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controller/UserController";

createConnection().then(() => {

    const app = createExpressServer({
        controllers: [UserController]
    });

    app.listen(3000);
    console.log("Express server has started on port 3000...");

}).catch(error => console.log(error));
