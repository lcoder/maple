import yaml from "js-yaml"
import fs from "fs"
import paths from "../paths"


const { appWebsite } = paths
const website = {
    name: "网站名称" ,
    contactMail: "联系邮箱" ,
}
try {
    const config = yaml.load(
            fs.readFileSync( appWebsite , "utf8" )
        )
    Object.assign( website , config )
} catch (e) {
    console.warn( "website.yml配置失败" )
    throw e
}

export default Object.freeze( website )