import { Post, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const insertToDB = async(data: Post): Promise<Post> => {
  const result = await prisma.post.create({data})
  return result
}

const getPosts = async(options:any)=> {
  console.log(options)
  const {sortBy, sortOrder, searchTerm, page, limit} = options;
  const skip = Number(page) * Number(limit) - Number(limit) || 0;
  const take = Number(limit) || 10
  const result = await prisma.post.findMany({
    skip,
    take,
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
  const total = await prisma.post.count();
  return {data: result, total}
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

const updatePost = async (id: number, payload: Partial<Post>): Promise<Post>=> {
  const result = await prisma.post.update({
    where: {
      id
    },
    data: payload
  })
  return result
}

const deletePost = async (id: number)=> {
  const result = await prisma.post.delete({
    where: {
      id
    }
  })
  return result
}

export const PostService = {
  insertToDB, getPosts, getPost,deletePost,updatePost
}