import yaml from "js-yaml"
import fs from "fs"
import paths from "../paths"


const { appWebsite } = paths
const defaultBase = "/"
const website = {
    name: "网站名称" ,
    base: defaultBase ,
    favicon: undefined ,
    contactMail: "联系邮箱" ,
}
try {
    const config = yaml.load(
            fs.readFileSync( appWebsite , "utf8" )
        )
    let { base } = config
    if ( base === undefined || base === null ||
        typeof base !== "string" || base.trim() === "" ) {
        base = defaultBase
    }
    Object.assign( website , config , { base } )
} catch (e) {
    console.warn( "website.yml配置失败" )
    throw e
}

export default Object.freeze( website )