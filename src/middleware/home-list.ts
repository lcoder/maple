import { Request , Response } from "express"
import getDocsInfo from "../helper/get-docs-info"

const getDocsPromise = getDocsInfo()

export default async function( req: Request , res: Response ) {
    const { corrects } = await getDocsPromise ,
        articles = corrects.map( ( { config } ) => config ) ,
        { baseUrl } = req ,
        released = articles
            .filter( item => {
                return item!.release === true
            } )
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
    res.render( "home" , { articles: released } )
}