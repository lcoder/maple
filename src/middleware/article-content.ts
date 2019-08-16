import { Request , Response , NextFunction } from "express"
import { articleRouteReg } from "../helper/share"
import findMatchedCache from "../helper/find-matched-cache"
import md2html from "../helper/md2html"
import website from "../helper/website"

export default async function articleContent( req: Request , res: Response , next: NextFunction ) {
    const { url } = req ,
        result = url.match( articleRouteReg )
    if ( result === null ) {
        return next()
    } else {
        const [ , year , month , day , fileName ] = result ,
            target = findMatchedCache( { year , month , day , fileName } )
        if ( target === undefined ) {
            return next()
        } else {
            const { file , config } = target ,
                { title } = config! ,
                mdHtml = await md2html( file )
            // res.send( `founded,${file}` )
            res.render( "article" , { mdHtml , title , website } )
        }
    }
}