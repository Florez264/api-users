import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/list-users", UserController.getUsers);
router.get("/buscar", UserController.searchByCity); 
router.get("/get-user/:id", UserController.getUserById);
router.put("/update-user/:id", UserController.updateUser);
router.delete("/delete-user/:id", UserController.deleteUser);

export default router;
