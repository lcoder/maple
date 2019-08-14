import { Request , Response } from "express"
import { articleRouteReg } from "../helper/share"
import findMatchedCache from "../helper/find-matched-cache"
import md2html from "../helper/md2html"

export default async function articleContent( req: Request , res: Response ) {
    const { url } = req ,
        result = url.match( articleRouteReg )
    if ( result === null ) {
        res.send( "404" )
    } else {
        const [ , year , month , day , fileName ] = result ,
            target = findMatchedCache( { year , month , day , fileName } )
        if ( target === undefined ) {
            res.send( "404" )
        } else {
            const { file , config } = target ,
                { title } = config! ,
                mdHtml = await md2html( file )
            // res.send( `founded,${file}` )
            res.render( "article" , { mdHtml , title } )
        }
    }
}