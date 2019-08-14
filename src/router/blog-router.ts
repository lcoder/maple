import express from "express"
import homeList from "../middleware/home-list"

const router = express.Router()

router.get( `/` , homeList )

export default router
