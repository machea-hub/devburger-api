import { Router } from "express";
import { v4 } from "uuid";

import User from "./app/models/User.js";
import { password } from "./config/database";

const routes = new Router();

routes.get("/", async(req, res) => {
    const user = await User.create({
        id: v4(),
        name: "Lucas",
        email: "Lucas2@email.com",
        password_hash: "123456"
    });

    return res.status(200).json(user);
})

export default routes;