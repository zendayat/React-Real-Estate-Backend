import { PrismaClient } from '@prisma/client'
import { userRoute } from '../routes/userRoute'
const prisma = new PrismaClient()

export {prisma}

app.use('api/user', userRoute)