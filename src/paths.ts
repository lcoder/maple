import path from "path"
import fs from "fs"


const appDirectory = fs.realpathSync(process.cwd())

function resolveApp( relativePath: string ) {
  return path.resolve(appDirectory, relativePath)
}


let { docPath } = process.env
const defaultDocPath = "docs"

docPath = docPath ? docPath : defaultDocPath


export default {
    appSrc: resolveApp("src"),
    appDocs: resolveApp( docPath ),
    appViews: resolveApp( "src/views" ) ,
    appPackageJson: resolveApp("package.json"),
    appWebsite: resolveApp("website.yml"),
}
