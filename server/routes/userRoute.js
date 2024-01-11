import express from 'express';
import { createUser } from '../controllers/userCtrl'
const router = express.Router(); 

router.post("/register", createUser)

export {router as userRoute}