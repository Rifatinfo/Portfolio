import { User, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

export class UserService {
  async createUser(data : Prisma.UserCreateInput) : Promise<User>{
    console.log({data});
    return await prisma.user.create({data});
  }

  async getUser(){
    return await prisma.user.findMany({orderBy : {id : "asc"}})
  }

  async getUserById(id : string) {
    return await prisma.user.findUnique({where : {id}})
  }

  async updateUser(id : string, data : Partial<User>) {
    return await prisma.user.update({where : {id}, data});
  }
}