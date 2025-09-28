import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

export class ProjectService {
    async createProject(data : Prisma.ProjectCreateInput) : Promise<Project>{
        return await prisma.project.create({data});
    }

    async getProjects(){
        return await prisma.project.findMany({
            orderBy : {createdAt : "desc"}
        })
    }

    async updateProject(id : string, data : Prisma.ProjectUpdateInput) : Promise<Project> {
        return await prisma.project.update({
            where : {id},
            data
        })
    }

    async deleteProject(id : string) : Promise<Project>{
        return await prisma.project.delete({
            where : {id}
        })
    }
}