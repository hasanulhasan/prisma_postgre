import express, { Application } from 'express'
import cors from 'cors'
import { CategoryRoutes } from './modules/category/category.routes';
import { PostRoutes } from './modules/post/post.routes';
import { UserRoutes } from './modules/user/user.routes';
const app:Application = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/v1/user', UserRoutes)
app.use('/v1/category', CategoryRoutes)
app.use('/v1/post', PostRoutes)

export default app;