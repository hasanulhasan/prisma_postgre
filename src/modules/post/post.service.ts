import { Post, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const insertToDB = async(data: Post): Promise<Post> => {
  const result = await prisma.post.create({data})
  return result
}

const getPosts = async(): Promise<Post[]> => {
  const result = await prisma.post.findMany()
  return result
}

export const PostService = {
  insertToDB, getPosts
}