import { Router } from "express";
import { addTask } from "../controllers/userController.js";
import { getTasks } from "../controllers/userController.js";
import { updateTask } from "../controllers/userController.js";
import { deleteTask } from "../controllers/userController.js";
import { markTaskCompleted } from "../controllers/userController.js";

function userRoutes () {
    const router = Router();
  

    router.get('/getTasks', getTasks);

    router.post('/addTask',addTask);

    router.delete('/deleteTask/:id', deleteTask);

    router.put('/updateTask/:id',updateTask);

    router.put('/markCompleted/:id',markTaskCompleted);


    

    return router;
};

export default userRoutes;