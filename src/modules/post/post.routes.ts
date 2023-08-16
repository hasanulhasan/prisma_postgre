import express from 'express'
import { PostController } from './post.controller';

const router = express.Router();

router.get('/:id', PostController.getSinglePost);
router.get('/', PostController.getAllPosts);
router.delete('/:id', PostController.deleteSinglePost);
router.patch('/:id', PostController.updateSinglePost);
router.post('/create-post', PostController.insertIntoDB);


export const PostRoutes = router