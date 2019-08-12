import express from "express"
import { resolveHome } from "./static"
import { config } from "./env"

const staticPath = resolveHome( config.static )

const app = express()

const { port , host } = config

app.use( express.static( staticPath ) )

const url = `http://${host}:${port}`

app.listen( Number( port ) , host , () => console.log(`serve start at: ${url}`))