import { Request, Response } from "express";
import UserService from "../services/user.service";
import { Logger } from "../utils/logger";

class UserController {
    createUser = async (req: Request, res: Response) => {
      try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(Logger.success(user));
      } catch (error) {
        res.status(400).json(Logger.error("Error creando usuario correo ya esta registrado..", error));
      }
    };
  
    getUsers = async (req: Request, res: Response) => {
      const { page, limit } = req.query;
      const users = await UserService.getUsers(Number(page) || 1, Number(limit) || 10);
      res.json(Logger.success(users));
    };
  
    getUserById = async (req: Request, res: Response) => {
      const user = await UserService.getUserById(req.params.id);
      res.json(Logger.success(user));
    };
  
    updateUser = async (req: Request, res: Response) => {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.json(Logger.success(user));
    };
  
    deleteUser = async (req: Request, res: Response) => {
      await UserService.deleteUser(req.params.id);
      res.json(Logger.success({ message: "Usuario eliminado" }));
    };
  
    searchByCity = async (req: Request, res: Response) => {
      const { ciudad } = req.query;
      const users = await UserService.searchByCity(ciudad as string);
      res.json(Logger.success(users));
    };
  }
  
  export default new UserController();
