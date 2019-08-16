import express from "express"
import { config } from "./env"
import blogRouter from "./router/blog-router"
import paths from "./paths"
import website from "./helper/website"
import { staticPath } from "./paths"

const { appViews } = paths
const { base } = website
const app = express()

app.set( "views" , appViews )
app.set( "view engine" , "ejs" )

const { port , host } = config

app.use( base , blogRouter )

app.use( express.static( staticPath ) )

const url = `http://${host}:${port}`

app.listen( Number( port ) , host , () => console.log(`serve start at: ${url}`))