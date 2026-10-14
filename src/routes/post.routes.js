import { Router } from 'express';
import * as postController from '../controllers/post.controller.js';

const postRoutes = Router();

postRoutes.post('/post/:author', postController.createPost);

postRoutes.get('/post/:id', postController.getPostById);

postRoutes.delete('/post/:id', postController.deletePost);

export default postRoutes;