import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

export class PostService {
    async createPost(data: Prisma.PostCreateInput): Promise<Post> {
        console.log({ data });
        const result = await prisma.post.create({
            data,
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                }
            }
        });
        return result;
    }

    async getUser() {
        return await prisma.post.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    },
                }
            },
         orderBy: { id: "asc" }
        })
    }
    async getPostById(id: string): Promise<Post | null> {
        return await prisma.post.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    },
                }
            }
        })
    }
    async updatePost(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
        return await prisma.post.update({
            where: { id },
            data,
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    },
                }
            }
        })
    }
    async deletePost(id: string): Promise<Post> {
        return await prisma.post.delete({
            where: { id }
        });
    }

}