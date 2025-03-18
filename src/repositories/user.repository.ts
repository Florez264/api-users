import User from "../models/user.model";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";

class UserRepository {
  async create(userData: CreateUserDTO) {
    return await User.create(userData);
  }

  async findAll(page: number, limit: number) {
    return await User.find().skip((page - 1) * limit).limit(limit);
  }

  async findById(id: string) {
    return await User.findById(id);
  }

  async update(id: string, userData: UpdateUserDTO) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  }

  async delete(id: string) {
    return await User.findByIdAndDelete(id);
  }

  async findByCity(ciudad: string) {
    return await User.find({ "direcciones.ciudad": ciudad });
  }
}

export default new UserRepository();
