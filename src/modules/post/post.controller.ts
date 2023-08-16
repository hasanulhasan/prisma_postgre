import { Request, Response } from "express"
import { PostService } from "./post.service"

const insertIntoDB = async (req: Request, res: Response)=> {
  try {
    const result = await PostService.insertToDB(req.body)
    res.send({
      success: true,
      message: 'Post created successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getAllPosts = async (req: Request, res: Response)=> {
  const options = req.query;
  try {
    const result = await PostService.getPosts(options);
    res.send({
      success: true,
      message: 'Posts fetched successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getSinglePost = async (req: Request, res: Response)=> {
  try {
    const result = await PostService.getPost(Number(req.params.id))
    res.send({
      success: true,
      message: 'Single Post fetched successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

export const PostController = {
  insertIntoDB,getAllPosts,getSinglePost
}