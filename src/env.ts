import fs from "fs"

const dotenvFiles = [
  `.env.local`,
  `.env`,
].filter(Boolean)

dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
        require("dotenv-expand")(
            require("dotenv").config({
                path: dotenvFile,
            })
        )
    }
})


export const config = {
    port: process.env.port ? process.env.port : 8081 ,
    host: process.env.host ? process.env.host : "0.0.0.0" ,
    static: process.env.static ? process.env.static : "public" ,
}