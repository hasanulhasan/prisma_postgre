import express from 'express'
import { UserController } from './user.controller';

const router = express.Router();

// router.get('/', (req,res)=> {
//   res.send('Hello prisma')
// })

router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getSingleUser)
router.post('/create-user', UserController.insertIntoDB)
router.post('/update-profile', UserController.insertOrUpdateProfile)



export const UserRoutes = router