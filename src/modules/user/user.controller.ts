import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response)=> {
  try {
    const result = await UserService.insertIntoDB(req.body)
    res.send({
      success: true,
      message: 'User created successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const insertOrUpdateProfile = async (req: Request, res: Response)=> {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body)
    res.send({
      success: true,
      message: 'Profile Updated/created successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getAllUsers = async (req: Request, res: Response)=> {
  try {
    const result = await UserService.getUsers();
    res.send({
      success: true,
      message: 'All Users',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}
const getSingleUser = async (req: Request, res: Response)=> {
  try {
    const result = await UserService.getUser(Number(req.params.id));
    res.send({
      success: true,
      message: 'All Users',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

export const UserController = {
  insertIntoDB,insertOrUpdateProfile,getAllUsers,getSingleUser
}
