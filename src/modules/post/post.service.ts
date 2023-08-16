import { Post, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const insertToDB = async(data: Post): Promise<Post> => {
  const result = await prisma.post.create({data})
  return result
}

const getPosts = async(options:any): Promise<Post[]> => {
  console.log(options)
  const {sortBy, sortOrder, searchTerm} = options;
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true
    },
    orderBy: sortBy && sortOrder ? { [sortBy]: sortOrder} : { createdAt : 'desc'},
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: 'insensitive'
          }
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: 'insensitive'
            }
          }
        },
      ]
    }
  })
  return result
}

const getPost = async (id: number)=> {
  const  result = await prisma.post.findUnique({
    where: {
      id
    },
    include: {
      author: true,
      category: true
    }
  })
  return result;
}

export const PostService = {
  insertToDB, getPosts, getPost
}