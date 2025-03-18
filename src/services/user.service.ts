import UserRepository from "../repositories/user.repository";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";

class UserService {
  async createUser(data: CreateUserDTO) {
    return await UserRepository.create(data);
  }

  async getUsers(page = 1, limit = 10) {
    return await UserRepository.findAll(page, limit);
  }

  async getUserById(id: string) {
    return await UserRepository.findById(id);
  }

  async updateUser(id: string, data: UpdateUserDTO) {
    return await UserRepository.update(id, data);
  }

  async deleteUser(id: string) {
    return await UserRepository.delete(id);
  }

  async searchByCity(ciudad: string) {
    return await UserRepository.findByCity(ciudad);
  }
}

export default new UserService();
