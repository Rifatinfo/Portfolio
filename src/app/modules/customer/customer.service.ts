import { Customer, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

export class CustomerService {
  async createCustomer(data : Prisma.CustomerCreateInput) : Promise<Customer>{
    console.log({data});
    return await prisma.customer.create({data});
  }

  async getCustomers(){
    return await prisma.customer.findMany({orderBy : {customerId : "asc"}})
  }
}