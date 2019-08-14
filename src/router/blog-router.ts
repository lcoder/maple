import express from "express"
import { articleRouteReg } from "../helper/share"
import homeList from "../middleware/home-list"
import articleContent from "../middleware/article-content"

const router = express.Router()

router.get( `/` , homeList )

router.get( articleRouteReg , articleContent )

export default router
