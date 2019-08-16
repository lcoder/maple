import express from "express"
import { articleRouteReg } from "../helper/share"
import homeList from "../middleware/home-list"
import articleContent from "../middleware/article-content"
import { staticPath } from "../paths"

const router = express.Router()

router.get( `/` , homeList )

router.get( articleRouteReg , articleContent )

router.use( express.static( staticPath ) )

export default router
