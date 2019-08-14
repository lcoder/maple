import paths from "../paths"
import fse from "fs-extra"
import findMdFiles from "./find-md-files"
import readMdsYaml from "./read-md-yamls"
import { MdYamlConfig } from "../@types/index"
const { appDocs } = paths

export interface DocsInfo {
    corrects: MdYamlConfig[] ,
    useless: MdYamlConfig[]
}

export default async (): Promise<DocsInfo> => {
    const exists = await fse.pathExists( appDocs )
    if ( exists ) {
        const mdFiles = await findMdFiles( appDocs ) ,
            mdYamls = await readMdsYaml( mdFiles ) ,
            corrects: MdYamlConfig[] = [] ,
            useless: MdYamlConfig[] = []
        mdYamls.forEach( item => {
            const { config } = item
            if ( config === undefined ) {
                useless.push( item )
            } else {
                corrects.push( item )
            }
        } )
        return {
            corrects ,
            useless ,
        }
    } else {
        throw new Error( `${appDocs}目录不存在` )
    }
}

