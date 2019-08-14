import fs from "fs"
import yaml from "js-yaml"
import { MdYamlConfig } from "../@types/index"

const yamlReg = /---([\s\S]*?)---/

export default async ( files: string[] ): Promise<MdYamlConfig[]> => {
    const promises = files.map( (file): Promise<MdYamlConfig> => {
            return new Promise( ( r ) => {
                let data = "" ,
                    hasMatched = false
                const mdConfig: MdYamlConfig = {
                        file ,
                        config: undefined
                    }
                const readable = fs.createReadStream( file , {
                        encoding: "utf8" ,
                        highWaterMark: 1 * 1024 ,      // 字节
                    } )
                readable.on( "data" , function(chunk: string) {
                    data += chunk;
                    if ( yamlReg.test( data ) ) {
                        const configStr = data.match( yamlReg )![ 1 ]
                        try {
                            const yamlConfig = yaml.safeLoad( configStr )
                            const { title , date , fileName } = yamlConfig
                            if (
                                title === undefined || title === null ||
                                date === undefined || date === null || typeof date !== "object" ||
                                fileName === undefined || fileName === null || typeof fileName !== "string" ) {
                                throw new Error( `${file}，yaml配置不符合格式` )
                            }
                            mdConfig.config = yamlConfig === null ?
                                undefined :
                                yamlConfig
                            r(
                                mdConfig
                            )
                        } catch ( e ) {
                            console.log( e )
                            r( mdConfig )
                        }
                        hasMatched = true
                        readable.destroy()
                    }
                } )
                readable.on( "end" , () => {
                    if ( hasMatched === false ) {
                        r( mdConfig )
                    }
                } )
            } )
        } )
    const allConfigs = await Promise.all( promises )
    return allConfigs
}