import { Request , Response } from "express"
import { docsInfos } from "../cache/index"
import website from "../helper/website"

export default async function( req: Request , res: Response ) {
    const { corrects } = docsInfos ,
        articles = corrects.map( ( { config } ) => config ) ,
        { baseUrl } = req ,
        released = articles
            .filter( item => {
                return item!.release === true
            } )
            .sort( ( a , b ) => b!.date.getTime() - a!.date.getTime() )
            .map( item => {
                const { date , fileName } = item! ,
                    year = date.getFullYear() ,
                    month = String( date.getMonth() + 1 ).padStart( 2 , "0" ) ,
                    day = String( date.getDate() ).padStart( 2 , "0" ) ,
                    href = `${baseUrl ? baseUrl : ""}/${year}/${month}/${day}/${fileName}`
                return {
                    ...item ,
                    year ,
                    month ,
                    day ,
                    href ,
                }
            } )
    res.render( "home" , { articles: released , website } )
}