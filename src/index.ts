import express from "express"
import { resolveHome } from "./static"
import { config } from "./env"
import blogRouter from "./router/blog-router"
import paths from "./paths"
import ejs from "ejs"

const staticPath = resolveHome( config.static )
const { appViews } = paths

const app = express()

app.set( "views" , appViews )
app.set( "view engine" , "ejs" )

const { port , host } = config

app.use( `/blog` , blogRouter )

app.use( express.static( staticPath ) )

const url = `http://${host}:${port}`

app.listen( Number( port ) , host , () => console.log(`serve start at: ${url}`))