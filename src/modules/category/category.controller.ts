import { Request, Response } from "express"
import { CategoryService } from "./category.service"

const insertIntoDB = async (req: Request, res: Response)=> {
  try {
    const result = await CategoryService.insertToDB(req.body)
    res.send({
      success: true,
      message: 'Category created successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

export const CategoryController = {
  insertIntoDB
}