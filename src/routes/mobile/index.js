import { Router } from "express";

const router = Router()

router.use("/auth").use('/client')

export default router