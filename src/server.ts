import  express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './router/userRouter';

dotenv.config();
const api = express();
api.use(express.json());
api.use(cors());
api.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

api.use('/user', userRouter);